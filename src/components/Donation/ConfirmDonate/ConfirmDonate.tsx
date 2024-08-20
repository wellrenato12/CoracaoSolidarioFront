import { HandHeart } from "@phosphor-icons/react";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import './ConfirmDonate.css';

interface ConfirmDonateProps {
  isLoading: boolean;
  isDisabled: boolean;
  donate: () => void;
}

export function ConfirmDonate({ isLoading, isDisabled, donate }: ConfirmDonateProps) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        disabled={isDisabled}
        type="button"
        className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all disabled:cursor-not-allowed"
        onClick={openModal}
      >
        {isLoading ? (
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          />
        ) : (
          <span className="flex items-center gap-3">
            DOAR
            <HandHeart size={28} />
          </span>
        )}
      </button>

      <Popup
        open={isOpen}
        onClose={closeModal}
        modal
      >
        <div className="h-[300px] flex flex-col mx-auto justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold">Deseja continuar?</h1>
            <hr className="border-slate-800" />
            <div className="flex gap-12">
              <button
                className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all"
                type="button"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all"
                type="submit"
                onClick={() => {
                  donate()
                  closeModal()
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
