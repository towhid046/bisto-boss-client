import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
const Payment = () => {
  return (
    <section>
      <SectionHeader title="Make Payment" heading="Payment" />
      <div>
        <button className="btn btn-primary btn-wide">Pay</button>
      </div>
    </section>
  );
};

export default Payment;
