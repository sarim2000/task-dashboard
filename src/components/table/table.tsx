import {
  Download,
  MagnifyingGlass,
  SortAscending,
} from "@phosphor-icons/react";
import { SetStateAction, useEffect, useState } from "react";
import styles from "./table.module.css";

const Table = () => {
  const [data, setData] = useState([
    {
      orderId: "#12323",
      status: "Success",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM",
      orderAmount: "₹1002",
    },
    {
      orderId: "#45632",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM",
      orderAmount: "₹2003",
    },
    {
      orderId: "#78932",
      status: "Success",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
    {
      orderId: "#78932",
      status: "Processing",
      transactionId: "1234567890987",
      refundDate: "12 July 2023, 03:00 PM ",
      orderAmount: "₹3400",
    },
  ]);
  const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  function calculateItemsPerPage() {
    const width = window.innerWidth;
    if (width > 1200) {
      // Example breakpoints
      return 10;
    } else if (width > 768) {
      return 3;
    } else {
      return 1;
    }
  }

  // Effect to update items per page on window resize
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(calculateItemsPerPage());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update 'data.map' in your JSX to 'currentItems.map'
  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <button
        key={number}
        onClick={() => paginate(number)}
        className={styles.pageNumber}
      >
        {number}
      </button>
    );
  });

  return (
    <div className={styles.tableContainer}>
      <div>
        <div className={styles.tableHeader}>
          <div className={styles.center}>
            <MagnifyingGlass size={16} />
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
              className={styles.center_input}
            />
          </div>
          <div className={styles.left}>
            <button>
              Sort <SortAscending size={16} />
            </button>
            <button>
              <Download size={16} />
            </button>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles.tablethead}>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Refund Date</th>
              <th>Order Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index}>
                <td className={styles.orderId}>{row.orderId}</td>
                <td>
                  {row.status === "Success" ? (
                    <div className={styles.greenCircle}></div>
                  ) : (
                    <div className={styles.grayCircle}></div>
                  )}
                  {row.status}
                </td>
                <td>{row.transactionId}</td>
                <td>{row.refundDate}</td>
                <td>{row.orderAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>{renderPageNumbers}</div>
    </div>
  );
};

export default Table;
