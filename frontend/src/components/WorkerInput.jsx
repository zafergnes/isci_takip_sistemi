import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Context/AuthContext";

const WorkerInput = ({ workers, date, onChange }) => {
  const { employer } = useAuth();
  let dates = date;
  let WorkControl = {
    worker_id: workers.id,
    work_id: workers.work_id,
    was_at_work: false,
    date: dates,
    employer_id: employer?.id,
  };
  useEffect(() => {
    setNewWorkControl({ ...newWorkControl, date: dates });
  }, [date]);

  const [newWorkControl, setNewWorkControl] = useState(WorkControl);
  useEffect(() => {
    if (onChange && newWorkControl.was_at_work === true)
      onChange(newWorkControl);
  }, [newWorkControl]);

  return (
    <>
      <div className="flex justify-center items-center mx-auto p-5">
        <div className="flex items-center  bg-white shadow-md rounded-xl m-3 w-[1000px] h-[150px] p-5">
          <Link
            className="m-auto flex items-center justify-center"
            to={`/worker/${workers.id}`}
          >
            <img
              className="mx-auto h-[50px] rounded-full"
              src={workers.img}
              alt=""
            />
            <div className="flex items-center">
              <h2 className="ml-3 text-xl text-center font-bold">
                {workers.name + " " + workers.surname}
              </h2>

              <div className="flex justify-center items-center my-auto mx-auto">
                <b className="ml-5">Telefon :&nbsp;</b>
                {workers.phone_number}
                <b className="ml-5">Çalıştığı iş : &nbsp;</b>
                {workers.work_id}
                <b className="ml-5">Yevmiye : &nbsp;</b>
                {workers.wage}
              </div>
            </div>
          </Link>
          <div className="flex justify-center ml-auto mr-auto ">
            <StyledWrapper className="flex justify-end items-center">
              <div className="radio-input ">
                <div>
                  <form className="flex justify-center ml-8 mr-auto gap-10 ">
                    <div>
                      <fieldset id={workers.id}>
                        <input
                          name="radio"
                          type="radio"
                          defaultChecked
                          className="input flex"
                          onChange={(e) =>
                            setNewWorkControl({
                              ...newWorkControl,
                              was_at_work: false,
                            })
                          }
                        />
                        <b>ÇALIŞMADI</b>
                      </fieldset>
                    </div>

                    <div>
                      <fieldset id={workers.id}>
                        <input
                          name="radio"
                          type="radio"
                          className="input"
                          onChange={(e) =>
                            setNewWorkControl({
                              ...newWorkControl,
                              was_at_work: true,
                            })
                          }
                        />
                        <b>ÇALIŞTI</b>
                      </fieldset>
                    </div>
                  </form>
                  {/* verilere erişme */}
                  {/* {selectedOption === "option1" && <div>çalışmadı</div>}
                  {selectedOption === "option2" && <div>çalıştı</div>} */}
                </div>
              </div>
            </StyledWrapper>
          </div>
        </div>
        <small>{JSON.stringify(newWorkControl)}</small>
      </div>
    </>
  );
};
const StyledWrapper = styled.div`
  .input {
    -webkit-appearance: none;
    /* remove default */
    display: block;
    margin: 10px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    vertical-align: middle;
    box-shadow: hsla(0, 0%, 100%, 0.15) 0 1px 1px,
      inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
    background-color: hsla(0, 0%, 0%, 0.2);
    background-image: -webkit-radial-gradient(
      hsla(200, 100%, 90%, 1) 0%,
      hsla(200, 100%, 70%, 1) 15%,
      hsla(200, 100%, 60%, 0.3) 28%,
      hsla(200, 100%, 30%, 0) 70%
    );
    background-repeat: no-repeat;
    -webkit-transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
      -webkit-transform 0.25s cubic-bezier(0.8, 0, 1, 1);
    outline: none;
  }

  .input:checked {
    -webkit-transition: background-position 0.2s 0.15s
        cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  .input:active {
    -webkit-transform: scale(1.5);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  }

  /* The up/down direction logic */

  .input,
  .input:active {
    background-position: 0 24px;
  }

  .input:checked {
    background-position: 0 0;
  }

  .input:checked ~ .input,
  .input:checked ~ .input:active {
    background-position: 0 -24px;
  }
`;
export default WorkerInput;
