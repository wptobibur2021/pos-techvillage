const SummeryPos = () => {
  return (
    <div className="w-full float-right mb-5">
      <div className="w-5/12 float-right">
        <ul>
          <li className="flex border-t gap-20 py-2 justify-between items-center">
            <p>Sub Total</p>
            <p>$49.00</p>
          </li>
          <li className="flex border-t gap-20 py-2 justify-between items-center">
            <p>TAX</p>
            <p>$49.00</p>
          </li>
          <li className="flex border-t gap-20 py-2 justify-between items-center">
            <p>Shipping</p>
            <p>$49.00</p>
          </li>
          <li className="flex border-t gap-20 py-2 justify-between items-center">
            <p className="text-blue-800 font-medium">Discount on cart</p>
            <p>$49.00</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummeryPos;
