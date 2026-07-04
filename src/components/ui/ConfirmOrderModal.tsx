type Props = {
  open: boolean;
  gameId: string;
  serverId: string;
  packageName: string;
  price: number;
  payment: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmOrderModal({
  open,
  gameId,
  serverId,
  packageName,
  price,
  payment,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-[#111111] p-5 border border-red-600/20">

        <h2 className="mb-5 text-xl font-bold">
          Confirm Order
        </h2>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Game ID</span>
            <span>{gameId}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Server ID</span>
            <span>{serverId}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Package</span>
            <span>{packageName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Price</span>
            <span className="text-red-500 font-bold">₹{price}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Payment</span>
            <span>{payment}</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={onClose}
            className="h-11 rounded-xl border border-red-600/20"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="h-11 rounded-xl bg-red-600 font-bold"
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}
