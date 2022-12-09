import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Box, Button, TextField, Checkbox, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';



function App() {
  const [sector, setSector] = useState(JSON.parse(localStorage.getItem("data")));
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userData")));
  const [checkbox, setCheckbox] = useState(false);
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState('');
  const [validation, setValidation] = useState(false);
  const userData = {
    "name": name,
    "sectors": sectors,
    "checkbox": checkbox
  }
  console.log("s", sector);
  const data = [
    {
      "name": "Manufacturing",
      "label": true,
      "sub": [
        {
          "name": "Construction materials",
          "label": false
        },
        {
          "name": "Electronics and Optics",
          "label": false
        },
        {
          "name": "Food and Beverage",
          "label": true,
          "sub": [
            {
              "name": "Bakery & confectionery products",
              "label": false
            },
            {
              "name": "Beverages",
              "label": false
            },
            {
              "name": "Fish & fish products",
              "label": false
            },
            {
              "name": "Meat & meat products",
              "label": false
            },
            {
              "name": "Milk & dairy products",
              "label": false
            },
            {
              "name": "Other",
              "label": false
            },
            {
              "name": "Sweets & snack food",
              "label": false
            }
          ]
        },
        {
          "name": "Furniture",
          "label": true,
          "sub": [
            {
              "name": "Bathroom/sauna",
              "label": false
            },
            {
              "name": "Bedroom",
              "label": false
            },
            {
              "name": "Children’s room",
              "label": false
            },
            {
              "name": "Kitchen",
              "label": false
            },
            {
              "name": "Living room",
              "label": false
            },
            {
              "name": "Office",
              "label": false
            },
            {
              "name": "Other (Furniture)",
              "label": false
            },
            {
              "name": "Other",
              "label": false
            },
            {
              "name": "Outdoor",
              "label": false
            },
            {
              "name": "Project furniture",
              "label": false
            }
          ]
        },
        {
          "name": "Machinery",
          "label": true,
          "sub": [
            {
              "name": "Machinery components",
              "label": false
            },
            {
              "name": "Machinery equipment/tools",
              "label": false
            },
            {
              "name": "Manufacture of machinery",
              "label": false
            },
            {
              "name": "Maritime",
              "label": true,
              "sub": [
                {
                  "name": "Aluminium and steel workboats",
                  "label": false
                },
                {
                  "name": "Boat/Yacht building",
                  "label": false
                },
                {
                  "name": "Ship repair and conversion",
                  "label": false
                }
              ]
            },
            {
              "name": "Metal structures",
              "label": false
            },
            {
              "name": "Other",
              "label": false
            },
            {
              "name": "Repair and maintenance service",
              "label": false
            }
          ]
        },
        {
          "name": "Metalworking",
          "label": true,
          "sub": [
            {
              "name": "Construction of metal structures",
              "label": false
            },
            {
              "name": "Houses and buildings",
              "label": false
            },
            {
              "name": "Metal products",
              "label": false
            },
            {
              "name": "Metal works",
              "label": true,
              "sub": [
                {
                  "name": "CNC-machining",
                  "label": false
                },
                {
                  "name": "Forgings, Fasteners",
                  "label": false
                },
                {
                  "name": "Gas, Plasma, Laser cutting",
                  "label": false
                },
                {
                  "name": "MIG, TIG, Aluminum welding",
                  "label": false
                }
              ]
            }

          ]
        },
        {
          "name": "Plastic and Rubber",
          "label": true,
          "sub": [
            {
              "name": "Packaging",
              "label": false
            },
            {
              "name": "Plastic goods",
              "label": false
            },
            {
              "name": "Plastic processing technology",
              "label": true,
              "sub": [
                {
                  "name": "Blowing",
                  "label": false
                },
                {
                  "name": "Moulding",
                  "label": false
                },
                {
                  "name": "Plastics welding and processing",
                  "label": false
                }
              ]
            },
            {
              "name": "Plastic profiles",
              "label": false
            }

          ]
        },
        {
          "name": "Printing",
          "label": true,
          "sub": [
            {
              "name": "Advertising",
              "label": false
            },
            {
              "name": "Book/Periodicals printing",
              "label": false
            },
            {
              "name": "Labelling and packaging printing",
              "label": false
            }
          ]
        },
        {
          "name": "Textile and Clothing",
          "label": true,
          "sub": [
            {
              "name": "Clothing",
              "label": false
            },
            {
              "name": "Textile",
              "label": false
            }
          ]
        },
        {
          "name": "Wood",
          "label": true,
          "sub": [
            {
              "name": "Other (Wood)",
              "label": false
            },
            {
              "name": "Wooden building materials",
              "label": false
            },
            {
              "name": "Wooden houses",
              "label": false
            }
          ]
        }
      ]
    },
    {
      "name": "Other",
      "label": true,
      "sub": [
        {
          "name": "Creative industries",
          "label": false
        },
        {
          "name": "Energy technology",
          "label": false
        },
        {
          "name": "Environment",
          "label": false
        }
      ]
    },
    {
      "name": "Service",
      "label": true,
      "sub": [
        {
          "name": "Business services",
          "label": false
        },
        {
          "name": "Engineering",
          "label": false
        },
        {
          "name": "Information Technology and Telecommunications",
          "label": true,
          "sub": [
            {
              "name": "Data processing, Web portals, E-marketing",
              "label": false
            },
            {
              "name": "Programming, Consultancy",
              "label": false
            },
            {
              "name": "Software, Hardware",
              "label": false
            },
            {
              "name": "Telecommunications",
              "label": false
            }
          ]
        },
        {
          "name": "Tourism",
          "label": false
        },
        {
          "name": "Translation services",
          "label": false
        },
        {
          "name": "Transport and Logistics",
          "label": true,
          "sub": [
            {
              "name": "Air",
              "label": false
            },
            {
              "name": "Rail",
              "label": false
            },
            {
              "name": "Road",
              "label": false
            },
            {
              "name": "Water",
              "label": false
            }
          ]
        }
      ]
    }
  ]
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data))
  })

  function options(val, index) {

    if (val.label) {
      return <>
        <option key={index + val.name} value={val.name}>{val.name}</option>
        {val.sub.map((value, index) =>
          <>
            {/* <option value={1}>{value.name}</option> */}
            {subOptions(value, index)}
          </>
        )}
      </>
    }
    else {
      return <option key={index + val.name} value={val.name}>{val.name}</option>;
    }

  }

  function subOptions(value, index) {
    if (value.label) {
      return <>
        <option key={index + value.name} value={value.name}>&nbsp;&nbsp;{value.name}</option>

        {value.sub.map((subvalue, index) =>
          <>
            {/* <option value={1}>{subvalue.name}</option> */}
            {subOptions1(subvalue, index)}

          </>
        )}
      </>
    } else {
      return <option key={index + value.name} value={value.name}>&nbsp;&nbsp;{value.name}</option>
    }
  }

  function subOptions1(subvalue, index) {
    if (subvalue.label) {
      return <>
        <option key={index + subvalue.name} value={subvalue.name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subvalue.name}</option>

        {subvalue.sub.map((subvalue1, index) =>
          <>
            <option key={index + subvalue1.name} value={subvalue1.name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subvalue1.name}</option>
          </>
        )}
      </>
    } else {
      return <option key={index + subvalue.name} value={subvalue.name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subvalue.name}</option>
    }
  }

  useEffect(() => {
    if (name === "" || sectors === "" || checkbox === false) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [sectors, name, checkbox])
  return (
    <>
      <Grid container spacing={2}>
        <Grid style={{ display: "flex", justifyContent: "center" }} item xs={12}>
          <Box style={{ padding: '10px' }}>
            <b>Please enter your name and pick the Sectors you are currently involved in.</b>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Formik
              validateOnChange
              enableReinitialize="true"
              initialValues={{
                name: "",
                sectors: "",
                checkbox: false
              }}


              onSubmit={(values, { resetForm }) => {
                console.log("values", name, sectors, checkbox);
                localStorage.setItem('userData', JSON.stringify(userData))
                setUserInfo(userData);
                resetForm();

              }}>
              {({ setFieldValue, submitForm, values, errors, handleSubmit, resetForm }) => {
                return (
                  <Form>
                    <Box style={{ padding: "20px" }}>

                      <Box style={{ padding: "20px" }}>
                        <TextField
                          name="name"
                          label="Name"
                          variant="outlined"
                          color="secondary"
                          size="small"
                          disabled={false}
                          fullWidth
                          onChange={(e) => setName(e.target.value)}
                        />

                      </Box>

                      <Box style={{ padding: "20px" }}>
                        Sectors:
                        <Select native defaultValue="" id="grouped-native-select" placeholder="Sectors" onChange={(e) => setSectors(e.target.value)}>
                          <option aria-label="None" value="Sectors2" />
                          {sector && sector.map((val, index) =>
                            options(val, index)
                          )}
                        </Select>
                      </Box>
                      <Box style={{ padding: "20px" }}>
                        <Checkbox
                          color="primary"
                          name='checkbox'
                          checked={checkbox && checkbox}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setFieldValue('checkbox', 1);
                              setCheckbox(true);
                              console.log(event.target.checked);
                            } else {
                              setFieldValue('checkbox', 0);
                              setCheckbox(false);
                              console.log(event.target.checked);

                            }
                          }}
                        />
                        Agree to terms
                      </Box>
                      <Box style={{ padding: "20px" }}>
                        <Button type="submit"
                          color="primary" variant="contained" disabled={validation} >
                          Save
                        </Button>
                      </Box>

                    </Box>
                  </Form>
                )
              }}
            </Formik>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box style={{ justifyContent: "center", display: 'flex' }}>
            <Box style={{ padding: "10px", border: '1px solid black', borderRadius: "5px", width: '50%' }}>
              <Box style={{ padding: "20px" }}>
                Name: {userInfo.name}
              </Box>
              <Box style={{ padding: "20px", }}>
                Sectors: {userInfo.sectors}
              </Box>
              <Box style={{ padding: "20px", }}>
                Agree: {userInfo.checkbox === true ? " Yes" : "NO"}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
