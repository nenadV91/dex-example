type AccountInfoPropps = {
  accounts: string[] | undefined;
};

export default function AccountInfo({ accounts }: AccountInfoPropps) {
  if (!accounts || !accounts.length) return null;

  return (
    <div>
      <span>Account: </span>
      <span>{accounts[0]}</span>
    </div>
  );
}
