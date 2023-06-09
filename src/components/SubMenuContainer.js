
import React from "react";
import { BsChevronRight } from "react-icons/bs";

function SubMenuContainer() {
  return (
    <div className="subMenuContianer">
      <h3>Menu Category</h3>
      <div className="viewAll">
        <p>View All</p>
        <i>
          <BsChevronRight />
        </i>
      </div>
    </div>
  );
}

export default SubMenuContainer;
