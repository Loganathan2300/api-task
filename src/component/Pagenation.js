import React from 'react'

const Pagenation = ({pages,setPageChange}) => {
//   const [pageChange,setPageChange]=useState(1)
//    //for pagechange code start
//  const pageLength = filterData.length;
//  const totalPages = Math.ceil(pageLength / itemPage);
//  const dataShowDetail = filterData.slice((pageChange - 1) * itemPage, pageChange * itemPage);
//   // console.log(dataShowDetail);
//  const startingNumnber = (pageChange - 1) * itemPage + 1;

//  let pages = [];
//  for (let i = 1; i <= totalPages; i++) {
//    pages.push(i);
//  }
  return (
    <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 my-1 ">
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mb-2 my-2">
            {pages.map((pageNumber) => (
              <li key={pageNumber} className="page-item">
                <button className="page-link Active" onClick={() => setPageChange(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            ))}
          </ul>
            </nav>
          </div>
        </div>
  )
}

export default Pagenation