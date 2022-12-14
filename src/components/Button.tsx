import styles from "../styles/Global";

interface buttonInterface {
  assetUrl: string;
  link: string;
}

const Button = ({ assetUrl, link }: buttonInterface) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <picture>
        <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      </picture>
      <div className={`flex flex-col justify-start ml-4`}>
        <p className={`${styles.btnText} font-normal text-xs`}> View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}> Expo Store</p>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Button;
