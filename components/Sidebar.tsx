import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

import { FaEnvelopeSquare, FaMobile, FaPaperPlane } from 'react-icons/fa'
import React, { useState } from 'react'

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMaps, setShowModalMaps] = useState(false);

  return (
    <>
      <img src="/images/senaid.jpeg" className="clearfix mx-auto border rounded-full" height={128} width={128}></img>
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="text-indigo-600">Memeti</span> <span className="text-blue-500">Senaid</span>
      </h3>
      <p className="px-2 py-1 my-3 border border-blue-500 rounded-full hover:bg-blue-200 dark:bg-dark-200 dark:bg-black-500" onClick={() => setShowModal(true)}>Développeur web</p>
      <a className="flex items-center justify-center px-2 py-1 my-2 border border-blue-500 rounded-full cursor-pointer hover:bg-blue-200 dark:bg-dark-200 dark:bg-black-500" href="/images/senaid-memeti.pdf" download="CV.pdf"><AiOutlineFilePdf className="w-6 h-6 text-blue-600" /> Télécharger le CV</a>

      <div className="py-4 my-5 bg-blue-200 dark:bg-dark-200 dark:bg-black-500" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation onClick={() => setShowModalMaps(true)} className="text-blue-600 animate-pulse" />
          <span className="drop-shadow-lg hover:text-blue-600" onClick={() => setShowModalMaps(true)}>148 rue Démosthène, 1070</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaEnvelopeSquare className="text-blue-600" />
          <p className="my-2"> senaiidd@hotmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaMobile className="text-blue-600" />
          <p className="my-2">+324 99 72 56 48</p>
        </div>
      </div>

      <div className="flex justify-around w-9/12 m-auto my-5 text-blue-500 md:w-full">
        <a href="https://www.facebook.com/senn.daid.9" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/sennaidmeta" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/SenaidMemeti" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/senaid-memeti-127ab4255/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r dark:bg-dark-200 dark:bg-black-500 focus:outline-none" onClick={() => window.open('mailto:senaiidd@hotmail.com')}>Envoyer message</button>
      {' '}{' '}
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 bg-white border-b border-gray-200 border-solid rounded-t dark:bg-dark-200 dark:bg-black-500">
                  <h3 className="text-3xl font-semibold">
                    Développeur web junior
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-blue-600 border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-dark-500 dark:text-white">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex flex-auto p-6 bg-white justify-evenly dark:bg-dark-200 dark:bg-black-500">
                  <div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4">
                    <img src="/images/sen.jpeg" className="mx-auto border" height={128} width={128}></img>
                  </div>
                  <div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4">
                    <p><strong>Nom:</strong> Memeti</p>
                    <p><strong>Prénom:</strong> Senaid</p>
                    <p><strong>Email:</strong> senaiidd@hotmail.com</p>
                    <p><strong>Téléphone:</strong> +324 99 72 56 48</p>
                    <div className="flex justify-center text-blue-500">
                      <a href="https://github.com/SenaidMemeti" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="w-8 h-8 cursor-pointer" />
                      </a>
                      <a href="https://www.linkedin.com/in/senaid-memeti-127ab4255/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 bg-white border-t border-blue-200 border-solid rounded-b dark:bg-dark-200 dark:bg-black-500">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear outline-none text-dark-500 background-transparent focus:outline-none dark:text-white"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-gradient-to-r bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => window.open('mailto:senaiidd@hotmail.com')}
                  >
                    Envoyer message
                  </button>
                  <a className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-gradient-to-r bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none" href="/images/senaid-memeti.pdf" download="CV.pdf"> Télécharger le CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      {showModalMaps ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gradient-to-t from-blue-200 to-transparent">
            <div className="relative w-auto mx-auto my-6 max-w-7xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-blue-600 border-0 outline-none focus:outline-none"
                  onClick={() => setShowModalMaps(false)}
                >
                  <span className="block w-6 h-6 text-dark-500">
                    ×
                    </span>
                </button>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.485860680031!2d4.305175315957057!3d50.840686567049836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c6a820ee0037%3A0xe853844ed6eda45a!2sRue%20D%C3%A9mosth%C3%A8ne%20148%2C%201070%20Anderlecht!5e0!3m2!1sfr!2sbe!4v1669985739402!5m2!1sfr!2sbe" width="350" height="350" style={{ border: 0 }} loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Sidebar
