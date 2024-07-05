import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCertificates,
  deleteCertificate,
} from "../redux/actions/certificate.action";
import { Button, Image } from "react-bootstrap";
import { AuditOutlined,  DownloadOutlined, NotificationOutlined, TagOutlined, ToTopOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {  faDownload, faPrint,  } from '@fortawesome/free-solid-svg-icons';
const Course = ({ sidebar }) => {
    const [activeTab, setActiveTab] = useState("myCourses");
const userId = useSelector((state) => state.auth.id);
        const dispatch = useDispatch();
        const { certificates } = useSelector(
          (state) => state.certificates
        );
      
        const [showModal, setShowModal] = useState(false);
        const [selectedCertificate, setSelectedCertificate] = useState(null);
        const modalRef = useRef();
      
        useEffect(() => {
          if (userId) {
            dispatch(getCertificates(userId));
          }
        }, [dispatch, userId]);
      
        const handleView = (certificate) => {
          setSelectedCertificate(certificate);
          setShowModal(true);
        };
      
        const handleClose = () => setShowModal(false);
      
        const handleClickOutside = (event) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
          }
        };
      
        useEffect(() => {
            if (showModal) {
              document.addEventListener("mousedown", handleClickOutside);
            } else {
              document.removeEventListener("mousedown", handleClickOutside);
            }
        
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [showModal]);
        
          const handleDelete = (certificateId) => {
            dispatch(deleteCertificate(userId, certificateId));
          };
          const data3 = [
            {
              key: '1', itemNo: '001', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
            },
            {
              key: '2', itemNo: '002', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
            },
            {
              key: '3', itemNo: '003', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
            },
            {
              key: '4', itemNo: '004', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
            },
            {
              key: '5', itemNo: '005', title: 'Course Title Here', vendor: 'Rock William', category: 'Web Development', deliverytype: 'download', price: '$15', date: '25 March 2020'
            },
          ];
    const MyCourse=()=>(
        <div className={`mt-24 ml-4 ${sidebar ? "w-[1400px]" : "w-[1600px]"}`}>
        <div className="bg-[#ffecec] flex items-center h-[50px] border-1 border-[#f7f7f7]">
          <h1 className="ml-10">Item No.</h1>
          <h1 className="ml-20">Title</h1>
          <h1 className={`${sidebar ? "ml-[400px]" : "ml-[500px]"}`}>Marks</h1>
          <h1 className="ml-24">Out Of</h1>
          <h1 className="ml-32">Upload Date</h1>
          <h1 className="ml-32">Certificate</h1>
          <h1 className="ml-24">Controls</h1>
        </div>
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white flex items-center relative h-[60px] border-[1px] border-[#f7f7f7] mt-[0.5px]"
          >
            <h1 className="ml-10">{index + 1}</h1>
            <h1 className="ml-[140px]">{certificate.title}</h1>
            <h1
              className={`absolute ${
                sidebar ? "left-[630px]" : "left-[730px]"
              }`}
            >
              {certificate.marks}
            </h1>
            <h1
              className={`absolute ${
                sidebar ? "left-[766px]" : "left-[865px]"
              }`}
            >
              {certificate.outOf}
            </h1>
            <h1
              className={`absolute ${
                sidebar ? "left-[935px]" : "left-[1035px]"
              }`}
            >
              {certificate.uploadDate}
            </h1>
            <Button
              className={`absolute text-blue-600 cursor-pointer ${
                sidebar ? "left-[1170px]" : "left-[1270px]"
              }`}
              onClick={() => handleView(certificate)}
            >
              View
            </Button>
            <Button
              className={`w-[20px] h-[20px] absolute ${
                sidebar ? "left-[1340px]" : "left-[1440px]"
              }`}
              onClick={() => handleDelete(certificate.itemNo)}
            >
              <Image src={require("../assets/delete.png")} />
            </Button>
          </div>
        ))}
        {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full"
          >
            <h2 className="text-2xl font-semibold mb-4">Certificate Details</h2>
            {selectedCertificate && (
              <div>
                <p>
                  <strong>Item No:</strong> {selectedCertificate.itemNo}
                </p>
                <p>
                  <strong>Title:</strong> {selectedCertificate.title}
                </p>
                <p>
                  <strong>Marks:</strong> {selectedCertificate.marks}
                </p>
                <p>
                  <strong>Out Of:</strong> {selectedCertificate.outOf}
                </p>
                <p>
                  <strong>Upload Date:</strong> {selectedCertificate.uploadDate}
                </p>
              </div>
            )}
            <button
              className="mt-4 px-4 py-2 bg-[#ED2A26] text-white rounded hover:bg-black"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )} 
      </div> 
    )
        const MyPurchases=()=>(
            
                <table className="min-w-full shadow-md rounded-sm">
                <thead className="bg-red-200 ">
                  <tr className="text-gray-700 border-b text-[14px] font-medium text-[#333333]">
                    <th className="py-2 px-9   text-left">Item No.</th>
                    <th className="py-2 px-7 text-left">Title</th>
                    <th className="py-2 px-10 text-left">Vendor</th>
                    <th className="py-2 px-9 text-left">Category</th>
                    <th className="py-2 px-9 text-left">Delivery Type</th>
                    <th className="py-2 px-7 text-left">Price</th>
                    <th className="py-2 px-7 text-left">Purchased Date</th>
                    <th className="py-2 px-13 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data3.map((item) => (
                    <tr key={item.key} className="border-b border-blue-gray-200 text-[14px] font-normal text-[#333333] ">
                      <td className="py-5 px-9 ">{item.itemNo}</td>
                      <td className="py-5 px-7 ">{item.title}</td>
                      <td className="py-5 px-10 text-[14px] text-[#4183c4] hover:text-black cursor-pointer ">{item.vendor}</td>
                      <td className="py-5 px-9   text-[14px] text-[#4183c4] hover:text-black cursor-pointer">{item.category}</td>
                      <td className="py-5 px-9 text-red-500  text-[14px] font-medium ">{item.deliverytype}</td>
                      <td className="py-5 px-7 ">{item.price}</td>
                      <td className="py-5 px-7 ">{item.date}</td>
                      <td className="py-5 px-11 "> <div className='flex gap-3 text-gray-500'>
                       <a href='#' className='hover:text-black'>
                       <FontAwesomeIcon icon={faDownload} />
        
                       </a>
                       <a href='#' className='hover:text-black'>
                       <FontAwesomeIcon icon={faTrashCan} />
                       </a>
                       <a href='#' className='hover:text-black'>
                       <FontAwesomeIcon icon={faPrint} />
                       </a>
                        </div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
           
        
      
         
      
         

       
    
 
  return (
    <div className="mt-24">
      <div className={`flex ml-4`}>
        <Image
          className="w-[28px] h-[28px]"
          src={require("../assets/award.png")}
        />
        <h1 className=" ml-[4px] text-xl">Courses</h1>
      </div>
      <div
        className={`bg-white relative mt-10 ml-4 h-[120px] flex text-center items-center ${
          sidebar ? "w-[1400px]" : "w-[1600px] mr-10 "
        }`}
      >
        <Image
          className="w-[40px] h-[40px] ml-10 mr-6"
          src={require("../assets/award.png")}
        />
        <h1 className="text-3xl font-normal mt-[9px]">
          Jump Into New Certificate
        </h1>
        <Button className="text-white font-medium border rounded-[4px] bg-[#ed2a26] border-[#ed2a26] hover:bg-black px-5 py-[11px] absolute right-14">
          Create your Course
        </Button>
      </div>
      <div className=" pt-5 px-5  border w-[100%] h-[100%]">
            <div className="bg-[#F3F3F3] border ">
              <button
                className={`text-black  font-medium text-[14px] px-3 py-3 w-[20%]  ${
                  activeTab === "myCourses" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab("myCourses")}
              >
                <AuditOutlined /> My Course
              </button>
              <button
                className={`text-black font-medium text-[14px] px-3 py-3 w-[20%]  ${
                  activeTab === "myPurchases" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab("myPurchases")}
              >
               <DownloadOutlined /> My Purchases
              </button>
              <button
                className={`text-black font-medium text-[14px] px-3 py-3 w-[20%]  ${
                  activeTab === "Paid" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab("upcoming")}
              >
               <ToTopOutlined /> Upcoming Courses
              </button>
              <button
                className={`text-black font-medium text-[14px] px-3 py-3 w-[20%]  ${
                  activeTab === "Paid" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab("discounts")}
              >
               <TagOutlined /> Discounts
              </button>
              <button
                className={`text-black font-medium text-[14px] px-3 py-3 w-[20%]  ${
                  activeTab === "Paid" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab("promotions")}
              >
               <NotificationOutlined /> Promotions
              </button>
            </div>
            <div className={`mt-2 bg-white ${sidebar ? "" : "ml-[100px]"}`}>
              {activeTab === "myCourses" && <MyCourse/>}
              {activeTab === "myPurchases" && <MyPurchases/>}
              
            </div>
           
          </div>
     
    </div>
  );
};

export default Course;
