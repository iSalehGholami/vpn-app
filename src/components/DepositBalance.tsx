import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, ArrowLeft } from "lucide-react";
import QRCode from "react-qr-code";

interface BalanceDepositModalProps {
  visible: boolean;
  onClose: () => void;
}

interface Currency {
  code: string;
  name: string;
}

interface PaymentMethod {
  type: "crypto" | "debit" | "external";
  walletAddress?: string;
  qrCodeValue?: string;
  cardInfo?: string;
  externalLink?: string;
}

const currencies: Currency[] = [
  { code: "BTC", name: "Bitcoin" },
  { code: "ETH", name: "Ethereum" },
  { code: "USDT", name: "Tether (USDT)" },
  { code: "IRR", name: "ایران ریال" },
];

// تنظیمات اطلاعات پرداخت برای هر ارز
const paymentDetails: Record<string, PaymentMethod> = {
  BTC: {
    type: "crypto",
    walletAddress: "btc-wallet-address",
    qrCodeValue: "btc-wallet-address",
  },
  ETH: {
    type: "crypto",
    walletAddress: "eth-wallet-address",
    qrCodeValue: "eth-wallet-address",
  },
  USDT: {
    type: "crypto",
    walletAddress: "usdt-wallet-address",
    qrCodeValue: "usdt-wallet-address",
  },
  IRR: { type: "debit", cardInfo: "شماره کارت: 1234-5678-9012-3456" },
  // برای روش‌های خارجی نیز می‌توانید externalLink اضافه کنید
};

const BalanceDepositModal: React.FC<BalanceDepositModalProps> = ({
  visible,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(visible);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  // تعیین ارتفاع اولیه (هنگام mount) جهت تشخیص تغییر ارتفاع (کیبورد)
  useEffect(() => {
    if (visible) setShowModal(true);
  }, [visible]);

  useEffect(() => {
    const baseHeight = window.innerHeight;
    const handleResize = () => {
      // اگر ارتفاع جدید کمتر از ارتفاع اولیه به اندازه 100px بود، فرض کنید کیبورد باز است
      if (window.innerHeight < baseHeight - 100) {
        setKeyboardOpen(true);
      } else {
        setKeyboardOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("کپی شد");
  };

  // رندر اطلاعات پرداخت بر اساس تنظیمات paymentDetails
  const renderPaymentInfo = () => {
    if (!selectedCurrency) return null;
    const details = paymentDetails[selectedCurrency];
    if (!details) return <p>اطلاعات پرداخت در دسترس نیست</p>;

    return (
      <>
        <p className="text-gray-700 mb-2">
          مبلغ فاکتور: {amount} {selectedCurrency === "IRR" ? "تومان" : "USD"}
        </p>
        {details.type === "crypto" &&
          details.walletAddress &&
          details.qrCodeValue && (
            <>
              <p className="text-gray-700">آدرس کیف پول:</p>
              <div className="flex justify-between p-2 border rounded-lg items-center mb-4">
                <span>{details.walletAddress}</span>
                <button onClick={() => handleCopy(details.walletAddress!)}>
                  <Copy size={16} />
                </button>
              </div>
              <div className="flex justify-center">
                <QRCode value={details.qrCodeValue} size={120} />
              </div>
            </>
          )}
        {details.type === "debit" && details.cardInfo && (
          <div className="p-4 border rounded-lg text-center">
            <p className="text-gray-700 mb-2">اطلاعات کارت دبیت:</p>
            <p className="text-gray-800 font-bold">{details.cardInfo}</p>
          </div>
        )}
        {details.type === "external" && details.externalLink && (
          <div className="p-4 border rounded-lg text-center">
            <p className="text-gray-700 mb-2">لینک پرداخت:</p>
            <a
              href={details.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {details.externalLink}
            </a>
          </div>
        )}
      </>
    );
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* پس‌زمینه */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* محتوای مدال */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white rounded-t-3xl p-6 shadow-lg"
            // ورود از پایین. در حالت عادی y=0، ولی اگر کیبورد باز است، به بالا منتقل می‌شود.
            initial={{ y: "100%" }}
            animate={{ y: keyboardOpen ? -100 : 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {step === 1 ? (
              <>
                <h2 className="text-center font-bold text-lg">
                  انتخاب روش و مقدار شارژ
                </h2>

                {/* انتخاب ارز به صورت کارت در یک شبکه */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {currencies.map((currency) => (
                    <div
                      key={currency.code}
                      className={`p-4 border rounded-lg text-center cursor-pointer ${
                        selectedCurrency === currency.code
                          ? "border-blue-500 bg-blue-100"
                          : "border-gray-300"
                      }`}
                      onClick={() => setSelectedCurrency(currency.code)}
                    >
                      {currency.name}
                    </div>
                  ))}
                </div>

                {/* ورودی مقدار */}
                {selectedCurrency && (
                  <div className="mt-4">
                    <label className="block mb-1 text-gray-700">
                      مقدار ({selectedCurrency === "IRR" ? "تومان" : "USD"})
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded-lg"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                )}

                {/* دکمه ادامه */}
                {amount && (
                  <button
                    className="mt-4 w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => setStep(2)}
                  >
                    ادامه
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center mb-4 relative">
                  <button
                    className="absolute left-0 p-2"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <h2 className="text-center font-bold text-lg w-full">
                    اطلاعات واریز
                  </h2>
                </div>
                {renderPaymentInfo()}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BalanceDepositModal;
