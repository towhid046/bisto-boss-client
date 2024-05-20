import { useEffect } from "react";
import scrollOnMount from "./../../utilities/scrollOnMount";

const Cart = () => {
  useEffect(() => {
    scrollOnMount();
  }, []);

  return (
    <section>
      <ol className="list-decimal">
        <li>user Item 1</li>
        <li>user Item 2</li>
        <li>user Item 3</li>
        <li>user Item 4</li>
        <li>user Item 5</li>
      </ol>
    </section>
  );
};

export default Cart;
