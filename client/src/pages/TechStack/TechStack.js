import React from "react";
import { Flip } from "react-reveal";

import "./techstack.css";
import { TechstackList } from "../../utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="techstack-content" id="teckStack">
        <Flip left>
          <div className="techstack-heading">
            <h1>Technologies Stack</h1>
            <hr />
          </div>
        </Flip>
        <div className="row mt-5">
          {TechstackList.map((tech) => (
            <>
              <div class="col-md-4" key={tech._id}>
                <div class="card my-3">
                  <Flip right>
                    <div className="card-content">
                      <div class="card-body techstack-body d-flex justify-content-center">
                        <h4 class="card-title">
                          <tech.icon className={tech.icon} size={30} />
                        </h4>
                        <h5 class="card-title mt-1 ms-2">{tech.name}</h5>
                      </div>
                    </div>
                  </Flip>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;