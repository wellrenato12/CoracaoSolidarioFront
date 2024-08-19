import { HandHeart } from "@phosphor-icons/react";
import { RotatingLines } from "react-loader-spinner";
import Popup from "reactjs-popup";

interface ConfirmDonateProps {
  isLoading: boolean;
}

export function ConfirmDonate({ isLoading }: ConfirmDonateProps) {
  return (
    <>
      <Popup
        trigger={
          <button
            type="submit"
            className="flex items-center justify-center gap-3 w-[130px] h-14 bg-rose-500 text-[15px] font-bold rounded-3xl text-rose-50 hover:bg-red-700 hover:scale-110 transition-all"
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
        }
      >
        <div className="bg-white w-[300px] h-[300px] flex flex-col mx-auto justify-center items-center">
          <button>Confirmar</button>
          <button>Editar</button>
          <button>Deletar</button>
        </div>
      </Popup>
    </>
  )
}