(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const m=`<div
  id="loadingscreen"
  class="w-full h-screen z-100 overflow-hidden bottom-0 bg-[rgb(21,23,30)] relative flex justify-center items-center"
>
  <div id="loadinganimation" class="w-[80px] h-[80px]"></div>
</div>`;let k=`<div
      class="xs:top-0 -mb-[16px] !z-50 max-w-[1632px] lg:px-[16px] h-auto mx-auto"
    >
      <div
        id="headersectiontop"
        class="lg:flex lg:justify-between xs:hidden h-[72px] flex justify-between"
      >
        <a
          href="#"
          class="xs:h-[48px] xs:w-[166px] lg:h-[72px] lg:w-[200px] cursor-pointer"
        >
          <svg
            class="xs:h-[48px] lg:h-[72px] lg:w-[200px] dark:text-blue3 text-[white]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            aria-labelledby="blz-icon-title-battlenet-logo"
            viewBox="0 0 196 32"
            part="icon"
          >
            <title id="blz-icon-title-battlenet-logo">Battle.net</title>
            <path
              fill="#148EFF"
              stroke="none"
              d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
            ></path>
            <path
              stroke="none"
              d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
            ></path>
            <path
              fill="#148EFF"
              stroke="none"
              d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
            ></path>
            <path
              stroke="none"
              d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
            ></path>
          </svg>
        </a>
        <div class="w-fit flex h-[48px] my-auto">
          <div
            class="flex dark:hover:bg-blue3 px-[16px] transition-all transition-duration-6000 rounded-[5px] group items-center cursor-pointer gap-3 group content-center"
          >
            <div class="">
              <label class="flex transition-all cursor-pointer gap-2">
                <svg
                  class="dark:group-hover:fill-white dark:group-hover:stroke-white dark:fill-blue3 dark:stroke-blue3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  ></path>
                </svg>

                <input
                  id="darkbtn"
                  type="checkbox"
                  value="synthwave"
                  class="toggle theme-controller"
                />
                <svg
                  class="dark:fill-blue3 dark:group-hover:fill-white dark:group-hover:stroke-white dark:stroke-blue3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle
                    class="dark:fill-blue3 dark:group-hover:fill-white dark:group-hover:stroke-white"
                    cx="12"
                    cy="12"
                    r="5"
                  />
                  <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                  />
                </svg>
              </label>
            </div>
          </div>
          <a href="https://download.battle.net/en-us/mobile"
            class="flex px-[16px] dark:hover:bg-blue3 hover:bg-[#23252B] transition-all transition-duration-1000 rounded-[5px] group items-center cursor-pointer gap-3 content-center"
          >
            <svg
              class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-download-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-download-outlined">Download</title>
              <path
                d="m18.06 9.646-.707-.707a.5.5 0 0 0-.707 0L13 12.586V4a1 1 0 1 0-2 0v8.586L7.353 8.939a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .708l5.707 5.707a.5.5 0 0 0 .707 0l5.708-5.707a.5.5 0 0 0 0-.708Z"
              ></path>
              <path
                d="M3.5 16a.5.5 0 0 0-.5.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V19H5v-2.5a.5.5 0 0 0-.5-.5z"
              ></path>
            </svg>
            <span
              class="inline-block font-ObjectSans dark:group-hover:text-[white] text-[16px] dark:text-blue3 text-[white]"
              >Download Battle.net</span
            >
          </a>
          <a href="https://battle.net/support/en-us/"
            class="flex px-[16px] dark:hover:bg-blue3 hover:bg-[#23252B] transition-all transition-duration-1000 rounded-[5px] group items-center cursor-pointer gap-3 content-center"
          >
            <svg
              class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-question-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-question-outlined">Question</title>
              <path
                d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
              ></path>
              <path
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
              ></path>
            </svg>
            <span
              class="inline-block font-ObjectSans dark:group-hover:text-[white] text-[16px] dark:text-blue3 text-[white]"
              >Support</span
            >
          </a>
          <div
            class="flex px-[16px] hover:dark:bg-blue3 hover:bg-[#23252B] transition-all transition-duration-1000 rounded-[5px] group items-center gap-3 cursor-pointer content-center"
          >
            <svg
              class="w-[24px] h-[24px] justify-self-start dark:group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-account-outlined"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-account-outlined">Account</title>
              <path
                d="M15.75 9.75a3.73 3.73 0 0 1-1.433 2.949A3.73 3.73 0 0 1 12 13.5a3.73 3.73 0 0 1-3.023-1.53 3.75 3.75 0 1 1 6.773-2.22m-5.5 0a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
              ></path>
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.047-4.73q.223.29.393.595A7.97 7.97 0 0 1 12 20a7.97 7.97 0 0 1-5.445-2.139l.005.005q.171-.305.393-.596c.442-.575.92-.943 1.36-1.13a7.37 7.37 0 0 0 3.687.992c1.34 0 2.594-.364 3.687-.993.44.188.919.556 1.36 1.13Zm-8.835-3.194c-1.188.268-2.237 1.115-2.99 2.172H5.22a8 8 0 1 1 13.56 0c-.755-1.056-1.804-1.904-2.992-2.172a4 4 0 0 0-.487-.075c-.947.715-2.082 1.131-3.3 1.131-1.22 0-2.355-.416-3.302-1.131q-.247.022-.487.075"
              ></path>
            </svg>
            <span
              class="group relative inline-block font-ObjectSans dark:group-hover:text-[white] dark:text-blue3 text-[16px] text-[white]"
              >Account
              <svg
                class="w-[12px] h-[12px] dark:fill-blue3 dark:group-hover:fill-[white] dark:group-hover:text-[white] fill-[#85868A] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-chevron-down-filled"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-chevron-down-filled">
                  Chevron Down
                </title>
                <path
                  d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
                ></path>
              </svg>
              <div
                id="accountlog"
                class="hidden z-1000 absolute group-hover:block rounded-[7px] transition-all top-9 right-[-32px] border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 dark:shadow-2xl gap-0 shadow-2xs shadow-[#c0c1c7] dark:shadow-[#0000004a] w-[320px] h-[365px]"
              >
                <a
                  href="https://account.battle.net/creation?locale=en-us"
                  class="h-[50px] px-[16px] bg-blue2 m-[20px] dark:hover:bg-white hover:bg-blue1 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center dark:bg-white1 justify-center"
                >
                  <span
                    class="inline-block font-NotoSansBold text-center dark:group-hover:text-blue1 text-[16px] dark:text-blue1 text-[white]"
                    >Log In</span
                  >
                </a>
                <a
                  href="https://account.battle.net/?locale=en-us"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg
                    class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-labelledby="blz-icon-title-bn-account-settings-outlined"
                    viewBox="0 0 24 24"
                  >
                    <title id="blz-icon-title-bn-account-settings-outlined">
                      Account Settings
                    </title>
                    <path
                      d="M11.675 13.771a6.5 6.5 0 0 0-.954 2.042 6.8 6.8 0 0 1-3.048-.864c-.335.163-.705.457-1.057.916q-.141.184-.257.375a6.97 6.97 0 0 0 4.159 1.744c.052.71.218 1.388.48 2.016a9 9 0 1 1 8.974-8.282A6.5 6.5 0 0 0 18 11.076V11a7 7 0 1 0-12.973 3.651c.762-.995 1.821-1.75 3.002-1.85.853.643 1.874 1.018 2.971 1.018q.343 0 .675-.048"
                    />
                    <path
                      d="M14.375 8.975a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-2 0a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0M16.455 13h1.093a.5.5 0 0 1 .492.412l.167.936a.55.55 0 0 0 .288.381q.146.079.282.171a.55.55 0 0 0 .49.076l1.051-.368a.5.5 0 0 1 .59.209l.518.837a.5.5 0 0 1-.12.659l-.943.725a.55.55 0 0 0-.205.445v.058a.55.55 0 0 0 .205.445l.943.726a.5.5 0 0 1 .12.659l-.516.837a.5.5 0 0 1-.591.209l-1.053-.369a.55.55 0 0 0-.49.076q-.135.093-.282.171a.55.55 0 0 0-.289.382l-.166.935a.5.5 0 0 1-.493.412h-1.093a.5.5 0 0 1-.492-.412l-.167-.935a.55.55 0 0 0-.288-.382 3 3 0 0 1-.282-.171.55.55 0 0 0-.49-.075l-1.05.367a.5.5 0 0 1-.591-.209l-.517-.837a.5.5 0 0 1 .12-.659l.94-.724a.55.55 0 0 0 .206-.445v-.06a.55.55 0 0 0-.205-.445l-.942-.725a.5.5 0 0 1-.12-.659l.517-.837a.5.5 0 0 1 .59-.21l1.052.37a.55.55 0 0 0 .49-.076q.136-.093.283-.172a.55.55 0 0 0 .29-.382l.166-.934a.5.5 0 0 1 .492-.412M17 19.09a1.58 1.58 0 1 0 0-3.157 1.58 1.58 0 0 0 0 3.158Z"
                    />
                  </svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Account Settings</span
                  >
                </a>
                <a
                  href="https://shop.battle.net/en-us/wishlist"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg
                    class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-labelledby="blz-icon-title-bn-heart-outlined"
                    viewBox="0 0 24 24"
                    part="icon"
                  >
                    <title id="blz-icon-title-bn-heart-outlined">Heart</title>
                    <path
                      d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.116 0-2.204.745-3.128 1.617A19 19 0 0 0 12 6.09c-.39-.459-.856-.986-1.372-1.473C9.704 3.745 8.616 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518zm1.557-1.472-.002.002-.1.09-.109-.099-.003-.003c-2.615-2.371-4.623-4.198-6.001-5.883C4.536 11.008 4 9.733 4 8.5 4 6.525 5.525 5 7.5 5c.197 0 .607.121 1.25.631.609.484 1.193 1.129 1.727 1.756L12 9.175l1.523-1.788c.534-.627 1.118-1.272 1.727-1.756.643-.51 1.053-.631 1.25-.631C18.475 5 20 6.525 20 8.5c0 1.233-.537 2.508-1.892 4.167-1.379 1.686-3.386 3.515-6 5.89Z"
                    ></path>
                  </svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Wish List</span
                  >
                </a>
                <a
                  href="https://battle.net/shop/en-us/checkout/key-claim"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg
                    class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-labelledby="blz-icon-title-bn-bar-code-outlined"
                    viewBox="0 0 24 24"
                    part="icon"
                  >
                    <title id="blz-icon-title-bn-bar-code-outlined">
                      Bar Code
                    </title>
                    <path
                      d="M2 2h2v16H2zm3 20v-2H3v2zm4-2H7v2h2zm2 0h5v2h-5zm10 0h-3v2h3zm1-18h-3v16h3zm-6 0h1v16h-1zm-2 0h-2v16h2zM6 2h4v16H6z"
                    ></path>
                  </svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Redeem Code</span
                  >
                </a>
                <a
                  href="https://shop.battle.net/en-ushttps://us.shop.battle.net/en-us/product/battle-tag-name-change"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg
                    class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-labelledby="blz-icon-title-bn-battletag-change-outlined"
                    viewBox="0 0 24 24"
                    part="icon"
                  >
                    <title id="blz-icon-title-bn-battletag-change-outlined">
                      Battletag Change
                    </title>
                    <path
                      d="M13.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H15v16h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17v-3h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM17 9h3v6h-3zM4 7h9v2H4v6h9v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
                    ></path>
                  </svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Change BattleTag</span
                  >
                </a>
                <div
                  class="absolute items-center content-center rounded-br-[7px] h-[70px] bg-[#2828286e] rounded-bl-[7px] bottom-0 w-full"
                >
                  <a
                    href="https://account.battle.net/creation?locale=en-us"
                    class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                  >
                    <svg
                      class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] !fill-[#85868A] inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-labelledby="blz-icon-title-bn-pencil-outlined"
                      viewBox="0 0 24 24"
                      part="icon"
                    >
                      <title id="blz-icon-title-bn-pencil-outlined">
                        Pencil
                      </title>
                      <path
                        d="M3.114 20.31 4 15 15.585 3.414a2 2 0 0 1 2.828 0l2.172 2.172a2 2 0 0 1 0 2.828L9 20l-5.31.885a.5.5 0 0 1-.575-.576Zm4.924-2.177 8.34-8.34-2.172-2.172-8.34 8.34-.434 2.606zm9.754-9.754L19.171 7l-2.172-2.172-1.378 1.38z"
                      ></path>
                    </svg>
                    <span
                      class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white !text-[#85868A]"
                      >Create Account</span
                    >
                  </a>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    `;const y=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/cart1.json")).json()).map(t=>`<a class="rounded-[5px] shadow-2xs" href="${t.destination}">
            <div
              class="relative cursor-pointer rounded-[5px] overflow-hidden shadow-2xs shadow-blue5 outline-0 h-[409px]"
            >
              <img
                src="${t.image.url}"
                class="w-full h-[156px] object-cover"
                alt=""
              />
              <div
                class="hover:bg-[#3e3e41] bg-[#2b2c2d] overflow-hidden dark:hover:bg-blue2 dark:bg-blue3 dark:text-[#e0e4e8b1] hover:-translate-y-[4px] p-[24px] duration-400 transition-all w-full h-[260px]"
              >
                <div class="flex gap-1 items-center">
                  <img
                    class="w-[24px] h-[24px] object-contain"
                    src="${t.franchiseIcon.iconUrl}"
                    alt=""
                  /><span
                    class="text-[#ffffffb8] uppercase dark:text-[#ffffffd6] text-[12px] font-ObjectSans"
                    >${t.name}</span
                  >
                </div>
                <h2
                  class="text-[18px] mt-2 leading-[22px] dark:text-[#ffffffd6] font-ObjectSans capitalize text-[#ffffffd6] line-clamp-2"
                >
                 ${t.title}
                </h2>
                <p
                  class="text-[#ffb400] dark:text-[#e0e4e8b1] line-clamp-3 mt-[4px] leading-[18px] font-NotoSans text-[14px]"
                >${t.marketingText}
                </p>
                <span
                  class="text-[#ffffffb8] dark:text-[#ffffffd6] capitalize mt-[2px] leading-[12px] text-[12px] font-NotoSans"
                  >${t.description}</span
                >
              </div>
              <span
                class="text-[16px] font-ObjectSans dark:text-[#ffffffd6] text-[#ffffffd6] absolute left-[24px] bottom-[24px]"
                >${t.price.fullAmount}</span
              >
            </div>
          </a>
         `);document.querySelector("#gamesContainer").insertAdjacentHTML("afterbegin",e.join(""))},z=()=>` <div class="max-w-[1600px] mx-auto z-0 px-[16px] py-[32px]">
      <div class="w-full mt-[48px] flex flex-col">
        <span class="text-[24px] text-white1 dark:text-blue3 font-ObjectSans"
          >Recommended</span
        >
        <div
          id="gamesContainer"
          class="w-full my-[10px] grid xs:grid-cols-1 xs:h-[2610px] sm:h-[1300px] sm:grid-cols-2 overflow-y-hidden md:grid-cols-3 md:h-[850px] lg:h-[1280px] xl:h-[860px] xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[411px] gap-[24px] [&>*]:bg-[#15171eea]"
        >
         
         
        </div>
      </div>
    </div>`,M=(...a)=>{a.forEach(l=>{document.querySelector("#root").insertAdjacentHTML("beforeend",l)})},j=()=>{let a=document.querySelector("#darkbtn"),l=document.querySelector("html");a.addEventListener("click",()=>{l.classList.contains("dark")?l.classList.remove("dark"):l.classList.add("dark")})};let S=()=>{let a=document.querySelector("#loadingscreen"),l=document.querySelector("body");l.classList.add("overflow-hidden"),setTimeout(()=>{a.classList.contains("hidden")?a.classList.remove("hidden"):(a.classList.add("hidden"),l.classList.remove("overflow-hidden"))},1e4)},N=` <div
      id="headersectionbottom"
      class="xs:top-0 z-50 xs:py-[16px] sticky dark:bg-white1 bg-[#15171e] lg:top-0 lg:mt-[5px] max-w-[1632px] px-[16px] h-auto mx-auto"
    >
      <div
        class="h-[56px] z-50 relative justify-around w-full lg:hidden xs:flex"
      >
        <!-- left absolute -left-[100%] -->
        <div
          id="leftOpen"
          class="flex justify-center items-center bg-blue5 dark:bg-[#EBF2FA] !border-0 !shadow-none w-[56px] h-[56px] absolute left-0"
        >
          <svg
            class="w-[24px] h-[24px] dark:stroke-blue5 !border-0 !shadow-none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-labelledby="blz-icon-title-menu"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-menu">Menu</title>
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </div>
        <div
          id="leftmenu"
          class="dark:bg-slate-200 z-50 bg-[#1A1C23] overflow-y-auto p-0 absolute -top-5 -left-5 -translate-x-[600px] transition-all h-screen flex flex-col w-[80vw]"
        >
          <div class=" ">
            <div
              class="h-[60px] relative flex items-center justify-center content-center"
            >
              <div
                id="lc"
                class="w-[60px] h-[60px] cursor-pointer absolute left-4 top-4"
              >
                <svg
                  class="w-[24px] h-[24px] dark:stroke-blue5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  aria-labelledby="blz-icon-title-x"
                  viewBox="0 0 24 24"
                  part="icon"
                >
                  <title id="blz-icon-title-x">X</title>
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
              </div>
              <svg
                class="h-[24px] dark:text-blue3 text-[white]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-battlenet-logo"
                viewBox="0 0 196 32"
                part="icon"
              >
                <title id="blz-icon-title-battlenet-logo">Battle.net</title>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
                ></path>
                <path
                  stroke="none"
                  d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
                ></path>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
                ></path>
                <path
                  stroke="none"
                  d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
                ></path>
              </svg>
            </div>
            <ul class="menu rounded-box flex gap-1 w-full p-2">
              <li >
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >Warcraft</span
                    >
                  </summary>
                  <ul id="dropdownsum1"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >Diablo</span
                    >
                  </summary>
                  <ul id="dropdownsum2"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >Overwatch</span
                    >
                  </summary>
                  <ul id="dropdownsum3"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >Call of Duty</span
                    >
                  </summary>
                  <ul id="dropdownsum4"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >DOOM</span
                    >
                  </summary>
                  <ul id="dropdownsum5"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >More</span
                    >
                  </summary>
                  <ul id="dropdownsum6"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary
                    class="flex w-full  py-3 transition-all cursor-pointer dark:hover:bg-blue3 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
                  >
                    <span
                      class="w-full h-full font-NotoSans group-hover:text-[#fff] dark:text-blue3 text-[18px] text-[#fff]"
                      >Battle.net Balance</span
                    >
                  </summary>
                  <ul>
                  <li><a
                  href="https://eu.shop.battle.net/en-us/product/balance"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
               
                  <svg  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-plus-circle-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-plus-circle-outlined">Plus Circle</title><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path><path d="M11.5 7a.5.5 0 0 0-.5.5V11H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H11v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5a.5.5 0 0 0-.5-.5z"></path></svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Add Balance</span
                  >
                </a></li>
                  <li><a 
                  href="https://eu.shop.battle.net/en-us/product/balance"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                 <svg class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-gift-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-gift-outlined">Gift</title><path d="M16.066 7.245a2.75 2.75 0 0 0 1.006-3.756c-.325-.563-.803-1.1-1.489-1.34-.711-.247-1.485-.119-2.268.333-.295.17-.528.432-.708.688-.186.265-.35.574-.49.895a9 9 0 0 0-.535 1.715 9 9 0 0 0-1.557-1.494 5 5 0 0 0-.87-.53c-.285-.132-.618-.242-.958-.242-.904 0-1.638.276-2.13.846-.475.55-.62 1.254-.62 1.904 0 .659.23 1.263.616 1.736H5a2 2 0 0 0-2 2v3.53a.5.5 0 0 0 .5.5H4V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.97h.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2h-4.242zm-.293-3.006a1.25 1.25 0 0 1-.457 1.707l-2.383 1.376a4.3 4.3 0 0 1 .062-.933 7.5 7.5 0 0 1 .498-1.725 3.7 3.7 0 0 1 .342-.632c.118-.168.2-.234.23-.25.517-.299.833-.283 1.025-.216.217.076.456.28.683.673M6.947 6.264c0-.454.104-.75.255-.924.132-.153.398-.326.995-.326.034 0 .139.016.325.102.177.083.386.21.612.377.453.334.923.79 1.293 1.244.253.311.422.578.52.777h-2.75c-.69 0-1.25-.56-1.25-1.25M18 19h-5v-4.899h5zm1-6.97h-6V10h6zm-8 0H5V10h6zM11 19H6v-4.899h5z"></path></svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Gift Balance</span
                  >
                </a></li>
                  <li><a
                  href="https://account.battle.net/transactions?_gl=1*xam5gi*_gcl_au*MTM0Mzg3MDk1OS4xNzQzNjk4MTM4*_ga*MTM4NTQxMDk0Ni4xNzQzNjk4MTM2*_ga_VYKNV7C0S3*MTc0NDQ1NTQ1My40My4xLjE3NDQ0NTgzNTcuMTEuMC4w"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-history-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-history-outlined">History</title><path d="M5.001 12a7 7 0 1 1 2.725 5.544.53.53 0 0 0-.695.032l-.713.713a.48.48 0 0 0 .027.712A9 9 0 1 0 3.001 12H1.208a.5.5 0 0 0-.354.854l2.793 2.792a.5.5 0 0 0 .707 0l2.793-2.792A.5.5 0 0 0 6.794 12H5Z"></path><path d="M12.001 7a1 1 0 0 0-1 1v4.036a1 1 0 0 0 .5.91l3.465 2a1 1 0 0 0 1-1.732l-2.965-1.712V8a1 1 0 0 0-1-1"></path></svg>
                  <span
                    class="inline-block font-NotoSans w-[210px] text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Balance History</span
                  >
                  <svg class="w-[18px] h-[18px] group-hover:fill-[white] fill-[#85868A] xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-external-link-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-external-link-filled">External Link</title><path d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"></path><path d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"></path></svg>
                </a></li>
                  <li><a
                  href="https://eu.battle.net/support/article/25904?_gl=1*popd7o*_gcl_au*MTM0Mzg3MDk1OS4xNzQzNjk4MTM4*_ga*MTM4NTQxMDk0Ni4xNzQzNjk4MTM2*_ga_VYKNV7C0S3*MTc0NDQ1NTQ1My40My4xLjE3NDQ0NTgzNTcuMTEuMC4w"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-question-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-question-outlined">Question</title><path d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"></path></svg>
                  <span
                    class="inline-block  w-[210px] font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Balance Help</span
                  >
                  <svg class="w-[18px] h-[18px] group-hover:fill-[white] fill-[#85868A] xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-external-link-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-external-link-filled">External Link</title><path d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"></path><path d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"></path></svg>
                </a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <!-- logo -->
        <div class="w-[200px] cursor-pointer">
          <svg
            class="w-full h-full dark:text-blue3 text-[white]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            aria-labelledby="blz-icon-title-battlenet-logo"
            viewBox="0 0 196 32"
            part="icon"
          >
            <title id="blz-icon-title-battlenet-logo">Battle.net</title>
            <path
              fill="#148EFF"
              stroke="none"
              d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
            ></path>
            <path
              stroke="none"
              d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
            ></path>
            <path
              fill="#148EFF"
              stroke="none"
              d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
            ></path>
            <path
              stroke="none"
              d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
            ></path>
          </svg>
        </div>
        <!-- right -->
        <div
          id="rightOpen"
          class="flex justify-center items-center bg-blue5 dark:bg-[#EBF2FA] !border-0 !shadow-none w-[56px] h-[56px] absolute right-0"
        >
          <svg
            class="w-[24px] h-[24px] dark:stroke-blue5 !border-0 !shadow-none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            aria-labelledby="blz-icon-title-user"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-user">User</title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
            ></path>
          </svg>
        </div>
        <div
          id="rightmenu"
          class="dark:bg-slate-200 z-50 bg-[#1A1C23] overflow-y-auto p-0 absolute -top-5 -right-5 translate-x-[600px] transition-all h-screen flex flex-col w-[80vw]"
        >
          <div class="">
            <div
              class="h-[60px] relative flex items-center justify-center content-center"
            >
              <div
                id="rc"
                class="w-[60px] h-[60px] cursor-pointer absolute right-0 top-4"
              >
                <svg
                  class="w-[24px] h-[24px] dark:stroke-blue5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  aria-labelledby="blz-icon-title-x"
                  viewBox="0 0 24 24"
                  part="icon"
                >
                  <title id="blz-icon-title-x">X</title>
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
              </div>
              <svg
                class="h-[24px] dark:text-blue3 text-[white]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-battlenet-logo"
                viewBox="0 0 196 32"
                part="icon"
              >
                <title id="blz-icon-title-battlenet-logo">Battle.net</title>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
                ></path>
                <path
                  stroke="none"
                  d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
                ></path>
                <path
                  fill="#148EFF"
                  stroke="none"
                  d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
                ></path>
                <path
                  stroke="none"
                  d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
                ></path>
              </svg>
            </div>
            <a
              href="https://account.battle.net/creation?locale=en-us"
              class="h-[50px] px-[16px] bg-[#148dffcc] m-[20px] dark:hover:bg-blue3 hover:bg-[#148dff] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center dark:bg-blue3 justify-center"
            >
              <span
                class="inline-block font-NotoSansBold text-center dark:group-hover:text-white text-[16px] dark:text-white text-[white]"
                >Log In</span
              >
            </a>
            <a
              href="https://account.battle.net/?locale=en-us"
              class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
            >
              <svg
                class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-account-settings-outlined"
                viewBox="0 0 24 24"
              >
                <title id="blz-icon-title-bn-account-settings-outlined">
                  Account Settings
                </title>
                <path
                  d="M11.675 13.771a6.5 6.5 0 0 0-.954 2.042 6.8 6.8 0 0 1-3.048-.864c-.335.163-.705.457-1.057.916q-.141.184-.257.375a6.97 6.97 0 0 0 4.159 1.744c.052.71.218 1.388.48 2.016a9 9 0 1 1 8.974-8.282A6.5 6.5 0 0 0 18 11.076V11a7 7 0 1 0-12.973 3.651c.762-.995 1.821-1.75 3.002-1.85.853.643 1.874 1.018 2.971 1.018q.343 0 .675-.048"
                />
                <path
                  d="M14.375 8.975a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0m-2 0a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0M16.455 13h1.093a.5.5 0 0 1 .492.412l.167.936a.55.55 0 0 0 .288.381q.146.079.282.171a.55.55 0 0 0 .49.076l1.051-.368a.5.5 0 0 1 .59.209l.518.837a.5.5 0 0 1-.12.659l-.943.725a.55.55 0 0 0-.205.445v.058a.55.55 0 0 0 .205.445l.943.726a.5.5 0 0 1 .12.659l-.516.837a.5.5 0 0 1-.591.209l-1.053-.369a.55.55 0 0 0-.49.076q-.135.093-.282.171a.55.55 0 0 0-.289.382l-.166.935a.5.5 0 0 1-.493.412h-1.093a.5.5 0 0 1-.492-.412l-.167-.935a.55.55 0 0 0-.288-.382 3 3 0 0 1-.282-.171.55.55 0 0 0-.49-.075l-1.05.367a.5.5 0 0 1-.591-.209l-.517-.837a.5.5 0 0 1 .12-.659l.94-.724a.55.55 0 0 0 .206-.445v-.06a.55.55 0 0 0-.205-.445l-.942-.725a.5.5 0 0 1-.12-.659l.517-.837a.5.5 0 0 1 .59-.21l1.052.37a.55.55 0 0 0 .49-.076q.136-.093.283-.172a.55.55 0 0 0 .29-.382l.166-.934a.5.5 0 0 1 .492-.412M17 19.09a1.58 1.58 0 1 0 0-3.157 1.58 1.58 0 0 0 0 3.158Z"
                />
                fff
              </svg>
              <span
                class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                >Account Settings</span
              >
            </a>
            <a
              href="https://shop.battle.net/en-us/wishlist"
              class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
            >
              <svg
                class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-heart-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-heart-outlined">Heart</title>
                <path
                  d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.116 0-2.204.745-3.128 1.617A19 19 0 0 0 12 6.09c-.39-.459-.856-.986-1.372-1.473C9.704 3.745 8.616 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518zm1.557-1.472-.002.002-.1.09-.109-.099-.003-.003c-2.615-2.371-4.623-4.198-6.001-5.883C4.536 11.008 4 9.733 4 8.5 4 6.525 5.525 5 7.5 5c.197 0 .607.121 1.25.631.609.484 1.193 1.129 1.727 1.756L12 9.175l1.523-1.788c.534-.627 1.118-1.272 1.727-1.756.643-.51 1.053-.631 1.25-.631C18.475 5 20 6.525 20 8.5c0 1.233-.537 2.508-1.892 4.167-1.379 1.686-3.386 3.515-6 5.89Z"
                ></path>
              </svg>
              <span
                class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                >Wish List</span
              >
            </a>
            <a
              href="https://battle.net/shop/en-us/checkout/key-claim"
              class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
            >
              <svg
                class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-bar-code-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-bar-code-outlined">Bar Code</title>
                <path
                  d="M2 2h2v16H2zm3 20v-2H3v2zm4-2H7v2h2zm2 0h5v2h-5zm10 0h-3v2h3zm1-18h-3v16h3zm-6 0h1v16h-1zm-2 0h-2v16h2zM6 2h4v16H6z"
                ></path>
              </svg>
              <span
                class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                >Redeem Code</span
              >
            </a>
            <a
              href="https://shop.battle.net/en-ushttps://us.shop.battle.net/en-us/product/battle-tag-name-change"
              class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
            >
              <svg
                class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-battletag-change-outlined"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-battletag-change-outlined">
                  Battletag Change
                </title>
                <path
                  d="M13.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H15v16h-1.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H17v-3h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM17 9h3v6h-3zM4 7h9v2H4v6h9v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
                ></path>
              </svg>
              <span
                class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                >Change BattleTag</span
              >
            </a>

            <div
              class="items-center content-start pt-3 mt-4 rounded-br-[7px] h-[800px] dark:bg-[#148dffab] bg-[#2828286e] rounded-bl-[7px] w-full"
            >
              <a
                href="https://battle.net/support/en-us/"
                class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
              >
                <svg
                  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-labelledby="blz-icon-title-bn-question-outlined"
                  viewBox="0 0 24 24"
                  part="icon"
                >
                  <title id="blz-icon-title-bn-question-outlined">
                    Question
                  </title>
                  <path
                    d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                  ></path>
                  <path
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
                  ></path>
                </svg>
                <span
                  class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                  >Support</span
                >
              </a>
              <a
                href="https://download.battle.net/en-us/mobile"
                class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
              >
                <svg
                  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-labelledby="blz-icon-title-bn-phone-outlined"
                  viewBox="0 0 24 24"
                  part="icon"
                >
                  <title id="blz-icon-title-bn-phone-outlined">Phone</title>
                  <path
                    d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8 3v14H8V5z"
                  ></path>
                </svg>
                <span
                  class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                  >Battle.net Mobile App</span
                >
              </a>
              <a
                href="https://account.battle.net/creation?locale=en-us"
                class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
              >
                <svg
                  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] dark:fill-blue3 fill-[#85868A] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-labelledby="blz-icon-title-bn-pencil-outlined"
                  viewBox="0 0 24 24"
                  part="icon"
                >
                  <title id="blz-icon-title-bn-pencil-outlined">Pencil</title>
                  <path
                    d="M3.114 20.31 4 15 15.585 3.414a2 2 0 0 1 2.828 0l2.172 2.172a2 2 0 0 1 0 2.828L9 20l-5.31.885a.5.5 0 0 1-.575-.576Zm4.924-2.177 8.34-8.34-2.172-2.172-8.34 8.34-.434 2.606zm9.754-9.754L19.171 7l-2.172-2.172-1.378 1.38z"
                  ></path>
                </svg>
                <span
                  class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[16px] dark:text-blue3 group-hover:text-white text-[#fff]"
                  >Create Account</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[56px] flex gap-2">
        <div
          class="xs:hidden lg:flex lg:w-[calc(100%-250px)] 2xl:w-[calc(100%-562px)] h-full content-center items-center rounded-[5px] dark:bg-blue3 my-auto bg-[#23252B]"
        >
          <div
            id="dropdoencon"
            class="flex px-[16px] relative h-full rounded-tl-[5px] rounded-bl-[5px] transition-all cursor-pointer dark:hover:bg-blue2 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
          >
            <span
              class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:text-white text-[14px] text-[#ffffffb8]"
              >Warcraft</span
            >
            <svg
              class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-chevron-down-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-chevron-down-filled">
                Chevron Down
              </title>
              <path
                d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
              ></path>
            </svg>
            <div
              id="dropdown1"
              class="hidden h-auto p-2 absolute group-hover:block rounded-[7px] transition-all top-[102%] left-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
            ></div>
          </div>
          <div
            id="dropdoencon"
            class="flex px-[16px] relative h-full rounded-tl-[5px] rounded-bl-[5px] transition-all cursor-pointer dark:hover:bg-blue2 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
          >
            <span
              class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:text-white text-[14px] text-[#ffffffb8]"
              >Diablo</span
            >
            <svg
              class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-chevron-down-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-chevron-down-filled">
                Chevron Down
              </title>
              <path
                d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
              ></path>
            </svg>
            <div
              id="dropdown2"
              class="hidden h-auto p-2 absolute group-hover:block rounded-[7px] transition-all top-[102%] left-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
            ></div>
          </div>
          <div
            id="dropdoencon"
            class="flex px-[16px] relative h-full rounded-tl-[5px] rounded-bl-[5px] transition-all cursor-pointer dark:hover:bg-blue2 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
          >
            <span
              class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:text-white text-[14px] text-[#ffffffb8]"
              >Overwatch</span
            >
            <svg
              class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-chevron-down-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-chevron-down-filled">
                Chevron Down
              </title>
              <path
                d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
              ></path>
            </svg>
            <div
              id="dropdown3"
              class="hidden h-auto p-2 absolute group-hover:block rounded-[7px] transition-all top-[102%] left-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
            ></div>
          </div>
          <div
            id="dropdoencon"
            class="flex px-[16px] relative h-full rounded-tl-[5px] rounded-bl-[5px] transition-all cursor-pointer dark:hover:bg-blue2 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
          >
            <span
              class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:text-white text-[14px] text-[#ffffffb8]"
              >Call of Duty</span
            >
            <svg
              class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-chevron-down-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-chevron-down-filled">
                Chevron Down
              </title>
              <path
                d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
              ></path>
            </svg>
            <div
              id="dropdown4"
              class="hidden h-auto p-2 absolute group-hover:block rounded-[7px] transition-all top-[102%] left-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
            ></div>
          </div>
          <div
            id="dropdoencon"
            class="flex px-[16px] relative h-full rounded-tl-[5px] rounded-bl-[5px] transition-all cursor-pointer dark:hover:bg-blue2 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
          >
            <span
              class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:text-white text-[14px] text-[#ffffffb8]"
              >DOOM</span
            >
            <svg
              class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-chevron-down-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-chevron-down-filled">
                Chevron Down
              </title>
              <path
                d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
              ></path>
            </svg>
            <div
              id="dropdown5"
              class="hidden h-auto p-2 absolute group-hover:block rounded-[7px] transition-all top-[102%] left-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
            ></div>
          </div>
          <div
            id="dropdoencon"
            class="flex px-[16px] relative h-full rounded-tl-[5px] rounded-bl-[5px] transition-all cursor-pointer dark:hover:bg-blue2 hover:bg-[#303237] transition-duration-1000 group items-center gap-1 content-center"
          >
            <span
              class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:text-white text-[14px] text-[#ffffffb8]"
              >More</span
            >
            <svg
              class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-white inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-chevron-down-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-chevron-down-filled">
                Chevron Down
              </title>
              <path
                d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
              ></path>
            </svg>
            <div
              id="dropdown6"
              class="hidden h-auto p-2 absolute group-hover:block rounded-[7px] transition-all top-[102%] left-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
            ></div>
          </div>
        </div>
        <div
          id="searchbtncon"
          class="xs:w-full lg:w-[54px] 2xl:w-[380px] h-full flex dark:!text-white dark:bg-blue3 content-center items-center rounded-[5px] my-auto bg-[#23252B]"
        >
          <label
            id="searchbtn"
            class="input z-0 xs:w-full xs:h-full dark:!text-white dark:bg-blue3 cursor-pointer bg-[#23252B] !focus:outline-0 !outline-0 !border-0 !shadow"
          >
            <svg
              class="w-[24px] h-[24px] justify-self-start dark:fill-white fill-[white] inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-search-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-search-filled">Search</title>
              <path
                d="M14.05 15.463a7.5 7.5 0 1 1 1.414-1.414l5.243 5.244a1 1 0 0 1-1.414 1.414l-5.244-5.244ZM15 9.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
              ></path>
            </svg>
            <input
              class="hover:placeholder:transition-all font-NotoSansBold text-[14px] hover:placeholder:transition-duration-2000 hover:placeholder:text-[#ffffff] dark:hover:placeholder:text-white dark:!text-white hover:text-[#ffffff] lg:hidden 2xl:inline-block text-[#ffffffb8]"
              type="search"
              required
              placeholder="Search Shop"
            />
          </label>
        </div>
        <div
          class="xs:hidden relative dark:hover:bg-blue3 dark:bg-blue3 lg:flex w-[182px] justify-self-endself-end content-center items-center rounded-[5px] my-auto bg-[#23252B] px-[15px] h-full cursor-pointer hover:bg-[#303237] group gap-1"
        >
          <span
            class="inline-block font-NotoSansBold group-hover:text-[#fff] text-[14px] dark:text-white text-[#ffffffb8]"
            >Battle.net Balance</span
          >
          <svg
            class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-blue3 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-labelledby="blz-icon-title-bn-chevron-down-filled"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-bn-chevron-down-filled">
              Chevron Down
            </title>
            <path
              d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
            ></path>
          </svg>
          <div 
            class="hidden h-auto py-2 z-1000 absolute group-hover:block rounded-[7px] transition-all top-[102%] right-0 border-1 duration-1000 dark:bg-blue3 dark:border-white1 border-[#d3d3d334] bg-blue5 gap-3 w-[300px]"
          >
          <a
                  href="https://eu.shop.battle.net/en-us/product/balance"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
               
                  <svg  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-plus-circle-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-plus-circle-outlined">Plus Circle</title><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"></path><path d="M11.5 7a.5.5 0 0 0-.5.5V11H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H11v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5a.5.5 0 0 0-.5-.5z"></path></svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Add Balance</span
                  >
                </a>
                <a 
                  href="https://eu.shop.battle.net/en-us/product/balance"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                 <svg class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-gift-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-gift-outlined">Gift</title><path d="M16.066 7.245a2.75 2.75 0 0 0 1.006-3.756c-.325-.563-.803-1.1-1.489-1.34-.711-.247-1.485-.119-2.268.333-.295.17-.528.432-.708.688-.186.265-.35.574-.49.895a9 9 0 0 0-.535 1.715 9 9 0 0 0-1.557-1.494 5 5 0 0 0-.87-.53c-.285-.132-.618-.242-.958-.242-.904 0-1.638.276-2.13.846-.475.55-.62 1.254-.62 1.904 0 .659.23 1.263.616 1.736H5a2 2 0 0 0-2 2v3.53a.5.5 0 0 0 .5.5H4V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.97h.5a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2h-4.242zm-.293-3.006a1.25 1.25 0 0 1-.457 1.707l-2.383 1.376a4.3 4.3 0 0 1 .062-.933 7.5 7.5 0 0 1 .498-1.725 3.7 3.7 0 0 1 .342-.632c.118-.168.2-.234.23-.25.517-.299.833-.283 1.025-.216.217.076.456.28.683.673M6.947 6.264c0-.454.104-.75.255-.924.132-.153.398-.326.995-.326.034 0 .139.016.325.102.177.083.386.21.612.377.453.334.923.79 1.293 1.244.253.311.422.578.52.777h-2.75c-.69 0-1.25-.56-1.25-1.25M18 19h-5v-4.899h5zm1-6.97h-6V10h6zm-8 0H5V10h6zM11 19H6v-4.899h5z"></path></svg>
                  <span
                    class="inline-block font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Gift Balance</span
                  >
                </a>
                <a
                  href="https://account.battle.net/transactions?_gl=1*xam5gi*_gcl_au*MTM0Mzg3MDk1OS4xNzQzNjk4MTM4*_ga*MTM4NTQxMDk0Ni4xNzQzNjk4MTM2*_ga_VYKNV7C0S3*MTc0NDQ1NTQ1My40My4xLjE3NDQ0NTgzNTcuMTEuMC4w"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-history-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-history-outlined">History</title><path d="M5.001 12a7 7 0 1 1 2.725 5.544.53.53 0 0 0-.695.032l-.713.713a.48.48 0 0 0 .027.712A9 9 0 1 0 3.001 12H1.208a.5.5 0 0 0-.354.854l2.793 2.792a.5.5 0 0 0 .707 0l2.793-2.792A.5.5 0 0 0 6.794 12H5Z"></path><path d="M12.001 7a1 1 0 0 0-1 1v4.036a1 1 0 0 0 .5.91l3.465 2a1 1 0 0 0 1-1.732l-2.965-1.712V8a1 1 0 0 0-1-1"></path></svg>
                  <span
                    class="inline-block font-NotoSans w-[210px] text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Balance History</span
                  >
                  <svg class="w-[18px] h-[18px] group-hover:fill-[white] fill-[#85868A] xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-external-link-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-external-link-filled">External Link</title><path d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"></path><path d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"></path></svg>
                </a>
                <a
                  href="https://eu.battle.net/support/article/25904?_gl=1*popd7o*_gcl_au*MTM0Mzg3MDk1OS4xNzQzNjk4MTM4*_ga*MTM4NTQxMDk0Ni4xNzQzNjk4MTM2*_ga_VYKNV7C0S3*MTc0NDQ1NTQ1My40My4xLjE3NDQ0NTgzNTcuMTEuMC4w"
                  class="h-[45px] px-[12px] hover:bg-[#303237] mx-[11px] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-3 content-center justify-start"
                >
                  <svg  class="w-[24px] h-[24px] justify-self-start group-hover:fill-[white] fill-[#85868A] inline-block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-question-outlined" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-question-outlined">Question</title><path d="M11.104 8.068c-.13.046-.248.118-.527.364-.252.223-.456.591-.543 1.048-.052.27-.27.497-.546.497h-1c-.277 0-.503-.225-.474-.5.103-.955.504-1.895 1.24-2.544.323-.285.676-.57 1.179-.75.482-.171 1.018-.217 1.675-.217 1.407 0 3.022.477 3.67 2.047.624 1.509-.02 3.086-1.447 3.75-.128.06-.302.135-.454.202l-.253.112a3.3 3.3 0 0 0-.47.248.5.5 0 0 0-.15.132c-.003.005-.016.024-.016.09v.953a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.952c0-.924.5-1.512 1.047-1.881.252-.17.524-.303.762-.411.136-.062.238-.106.335-.148.112-.049.216-.094.356-.159.463-.215.654-.66.442-1.173-.186-.451-.73-.81-1.822-.81-.594 0-.853.048-1.004.102M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"></path></svg>
                  <span
                    class="inline-block  w-[210px] font-NotoSans text-start dark:group-hover:text-[white] text-[14px] dark:text-[#15171e] group-hover:text-white text-[#fff]"
                    >Balance Help</span
                  >
                  <svg class="w-[18px] h-[18px] group-hover:fill-[white] fill-[#85868A] xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-external-link-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-external-link-filled">External Link</title><path d="M13.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.086l-6.293 6.293a1 1 0 1 0 1.414 1.414L18 7.414V10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"></path><path d="M8 7h4.08l-2 2H8a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.08l2-2V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4"></path></svg>
                </a>
            
          </div>
        </div>
      </div>
    </div>`;const B=()=>{let a=document.querySelector("#leftOpen"),l=document.querySelector("#rightOpen"),e=document.querySelector("#rightmenu"),t=document.querySelector("#leftmenu"),r=document.querySelector("#rc"),n=document.querySelector("#lc");document.querySelector("#headersectionbottom");let o=document.querySelector("body"),s=document.querySelector("#searchbtn");a.addEventListener("click",()=>{t.classList.remove("-translate-x-[600px]"),o.classList.add("overflow-hidden"),s.classList.add("hidden"),e.classList.contains("translate-x-[600px]")||e.classList.add("translate-x-[600px]")}),l.addEventListener("click",()=>{o.classList.add("overflow-hidden"),e.classList.remove("translate-x-[600px]"),s.classList.add("hidden"),t.classList.contains("-translate-x-[600px]")||t.classList.add("-translate-x-[600px]")}),n.addEventListener("click",()=>{t.classList.add("-translate-x-[600px]"),o.classList.remove("overflow-hidden"),s.classList.remove("hidden")}),r.addEventListener("click",()=>{e.classList.add("translate-x-[600px]"),o.classList.remove("overflow-hidden"),s.classList.remove("hidden")})},C=()=>` <div
      id="slider"
      class="max-w-[1632px] xs:h-[440px] mx-auto z-0 px-[16px] lg:h-[360px]"
    >
      <div class="transition-all w-full h-full relative">
        <div
          id="slides"
          class="rounded-[8px] w-full h-full relative overflow-hidden"
        ></div>
        <button
          class="absolute z-30 cursor-pointer xs:w-[32px] xs:h-[64px] lg:w-[40px] lg:h-[80px] items-center justify-center bg-[#15171E] text-white rounded-[5px] outline-1 outline-gray-800 hover:outline-2 transition-all hover:outline-gray-500 left-[20px] top-[calc(50%-32px)]"
          id="prevbtn"
        >
          <svg
            class="lg:w-[40px] lg:h-[80px] xs:w-[32px] xs:h-[64px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-labelledby="blz-icon-title-bn-chevron-left-filled"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-bn-chevron-left-filled">
              Chevron Left
            </title>
            <path
              d="M14.646 5.353a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 1 0 .706L10.83 12l5.227 5.236a.5.5 0 0 1 0 .707l-.703.703a.5.5 0 0 1-.708 0l-6.293-6.293a.5.5 0 0 1 0-.707z"
            ></path>
          </svg>
        </button>
        <button
          class="absolute z-30 cursor-pointer lg:w-[40px] lg:h-[80px] xs:w-[32px] xs:h-[64px] items-center justify-center bg-[#15171E] text-white rounded-[5px] outline-1 outline-gray-800 hover:outline-2 duration-700 transition-all hover:outline-gray-500 right-[20px] top-[calc(50%-32px)]"
          id="nextbtn"
        >
          <svg
            class="lg:w-[40px] lg:h-[80px] xs:w-[32px] xs:h-[64px] rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-labelledby="blz-icon-title-bn-chevron-left-filled"
            viewBox="0 0 24 24"
            part="icon"
          >
            <title id="blz-icon-title-bn-chevron-left-filled">
              Chevron Left
            </title>
            <path
              d="M14.646 5.353a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 1 0 .706L10.83 12l5.227 5.236a.5.5 0 0 1 0 .707l-.703.703a.5.5 0 0 1-.708 0l-6.293-6.293a.5.5 0 0 1 0-.707z"
            ></path>
          </svg>
        </button>
        <div
          class="flex items-center gap-0 w-fit mx-auto mt-3 rounded-[5444px] h-[25px] dark:bg-blue3 justify-center"
        >
          <button
            class="w-[40px] cursor-pointer flex items-center gap-0 justify-center h-[40px]"
            id="stopbtn"
          >
            <svg
              id="pausebtn"
              class="w-[20px] cursor-pointer fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-pause-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-pause-filled">Pause</title>
              <path
                d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"
              ></path>
            </svg>
          </button>
          <div id="pagination" class="flex"></div>
        </div>
      </div>
    </div>`,A=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/banners.json")).json()).map(t=>`<div
            id="slide"
            class="w-full h-full absolute transition-all duration-400"
          >
            <img
              class="w-full xs:block lg:hidden h-full object-cover"
              src="${t.backgroundMobileUrl}"
              alt="karim"
            />
            <img
              class="w-full xs:hidden lg:block h-full object-cover"
              src="${t.backgroundDesktopUrl}"
              alt="karim"
            />
            <div
              class="xs:w-[320px] lg:w-[288px] py-[20px] xs:right-[50%] xs:translate-x-[50%] xs:bottom-0 absolute h-full lg:right-[78%] lg:top-0 flex flex-col xs:justify-end items-center"
            >
              <img
                class="lg:w-fit relative xs:w-[319px] lg:h-[150px] my-[8px] items-center justify-center"
                src="${t.callToAction.logoUrl}"
                alt=""
              />
              <h2
                class="xs:text-[16px] lg:text-[20px] text-center leading-[20px] text-white font-ObjectSans"
              >
                ${t.callToAction.subHeadline}
              </h2>
              <a
                class="inline-block text-[20px] text-center leading-[20px] items-center justify-center p-[18px] text-white font-ObjectSans transition dark:hover:bg-blue3 dark:bg-blue3 hover:bg-blue1 bg-blue2 h-[56px] w-[280px] rounded-[6px] mt-[15px] mx-[12px]"
                href=""
              >
                ${t.callToAction.buttonText}</a
                >
                </div>
                </div>`);document.querySelector("#slides").insertAdjacentHTML("afterbegin",e.join(""))};let L=()=>{let a=[...document.querySelectorAll("#slide")],l=document.querySelector("#nextbtn"),e=document.querySelector("#prevbtn"),t=document.querySelector("#stopbtn"),r=document.querySelector("#pagination"),n=document.querySelector("#slider");document.querySelector("#playbtn"),document.querySelector("#pausebtn");let o=0;n.addEventListener("mouseover",()=>{l.classList.remove("hidden"),e.classList.remove("hidden")}),n.addEventListener("mouseout",()=>{l.classList.add("hidden"),e.classList.add("hidden")});let s=i=>{a.forEach((c,u)=>{c.style.left=`${(u-i)*100}%`}),b()};s(o);let p=()=>{o===a.length-1?(o=0,s(o)):(o++,s(o))},x=()=>{o===0?(o=a.length-1,s(o)):(o--,s(o))};function b(){[...document.querySelectorAll(".bullet")].forEach((c,u)=>{c.classList.remove("active"),u===o&&c.classList.add("active")})}l.addEventListener("click",()=>{p()}),e.addEventListener("click",()=>{x()});let g=setInterval(()=>{p()},6e3),h=!0;t.addEventListener("click",()=>{h===!0?(clearInterval(g),t.innerHTML=`<svg
          id="playbtn"
          class="w-[20px] fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-labelledby="blz-icon-title-bn-play-filled"
          viewBox="0 0 24 24"
          part="icon"
        >
          <title id="blz-icon-title-bn-play-filled">Play</title>
          <path
            d="M7.768 5.489A.5.5 0 0 0 7 5.911v12.178a.5.5 0 0 0 .768.422l9.57-6.09a.5.5 0 0 0 0-.843L7.767 5.49Z"
          ></path>
        </svg>`,h=!1):(g=setInterval(()=>{p()},6e3),t.innerHTML=`<svg
          id="pausebtn"
          class="w-[20px] fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-labelledby="blz-icon-title-bn-pause-filled"
          viewBox="0 0 24 24"
          part="icon"
        >
          <title id="blz-icon-title-bn-pause-filled">Pause</title>
          <path
            d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"
          ></path>
        </svg>`,h=!0)}),document.addEventListener("keyup",i=>{i.key==="ArrowRight"?p():i.key==="ArrowLeft"&&x()});let v=a.map((i,c)=>`<div class="bullet" data-id="${c}"></div>`);r.insertAdjacentHTML("afterbegin",v.join("")),b(),document.querySelectorAll(".bullet").forEach(i=>{i.addEventListener("click",c=>{o=+c.target.dataset.id,s(o)})});let d=0,f=0,w=()=>{d<f?x():d>f&&p(),f=0,d=0};n.addEventListener("touchstart",i=>{d=i.changedTouches[0].screenX}),n.addEventListener("touchend",i=>{f=i.changedTouches[0].screenX,w()})},q=`  <div
      class="w-full mt-[50px] border-t-2 border-b-2 border-[#23252B] flex justify-center"
    >
      <div
        class="w-[2600px] py-[64px] bg-cover px-[40px] bg-[url(https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt33881df85a125c99/645a6b18a3a6d365a5b032fb/mobile-bg-lg_3.png)] xs:h-[840px] lg:h-[566px]"
      >
        <div
          class="flex xs:flex-col lg:flex-row items-center justify-center mx-auto xs:gap-[49px] lg:gap-[80px]"
        >
          <img
            class="lg:w-[55%] xs:order-2 lg:order-2 xs:h-fit 2xl:w-[792px] my-auto"
            src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt13471a215fdd353b/64ee7e08c0047107f1fa2fd7/laptop-optimized.png"
            alt=""
          />
          <div
            class="flex-col xs:order-1 xs:items-center lg:items-start lg:order-2 flex xs:gap-6 lg:gap-3 2xl:py-[60px]"
          >
            <h3 class="text-[48px] font-ObjectSans text-white1">
              Dive into adventure
            </h3>
            <span class="text-[20px] font-NotoSans text-[#ffffffb8]"
              >Download Battle.net and join a community of millions.</span
            >
            <div class="flex gap-4 2xl:mt-4 flex-wrap">
              <a
                class="flex gap-2 cursor-pointer bg-blue1 rounded-[5px] leading-[30px] h-[40px] py-[6px] px-[32px] font-ObjectSans text-[16px] text-white2"
                href="https://download.battle.net/en-us?product=bnetdesk&amp;platform=windows"
              >
                <svg
                  class="fill-white2 w-[24px] h-[24px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  aria-labelledby="blz-icon-title-windows"
                  viewBox="0 0 48 48"
                >
                  <title id="blz-icon-title-windows">Windows</title>
                  <path
                    stroke="none"
                    d="M6 6h17.064v17.063H6zm18.936 0H42v17.063H24.936zM6 24.937h17.064V42H6zm18.936 0H42V42H24.936z"
                  />
                </svg>
                Download for Windows</a
              >
              <a
                class="inline-block cursor-pointer bg-[#2A2D37] rounded-[5px] leading-[30px] h-[40px] py-[6px] px-[32px] font-ObjectSans text-[16px] text-white2"
                href="https://download.battle.net/en-us/desktop"
                >Learn More</a
              >
            </div>
            <span
              class="text-[16px] xs:mt-[20px] lg:mt-[50px] font-NotoSans text-[#ffffffb8]"
              >Also available for
              <a
                class="text-blue1 font-NotoSansBold underline underline-offset-2"
                href="https://download.battle.net/en-us/desktop?_gl=1*do1jos*_gcl_au*MTM0Mzg3MDk1OS4xNzQzNjk4MTM4*_ga*MTM4NTQxMDk0Ni4xNzQzNjk4MTM2*_ga_VYKNV7C0S3*MTc0NDI4NDY1NC4zMy4xLjE3NDQyODY3NjEuNTAuMC4w"
                >Mac</a
              >
              and
              <a
                class="text-blue1 font-NotoSansBold underline underline-offset-2"
                href="https://download.battle.net/en-us/mobile?_gl=1*4en8r3*_gcl_au*MTM0Mzg3MDk1OS4xNzQzNjk4MTM4*_ga*MTM4NTQxMDk0Ni4xNzQzNjk4MTM2*_ga_VYKNV7C0S3*MTc0NDI4NDY1NC4zMy4xLjE3NDQyODY4MzEuNjAuMC4w"
                >mobile</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>`,T=` <div class="w-full">
      <div
        class="max-w-[1600px] mx-auto z-0 py-[40px] xs:px-[16px] lg:px-[40px] mt-[40px] xs:h-[548px] lg:h-[340px]"
      >
        <div
          class="w-full lg:h-[48px] flex xs:flex-col lg:flex-row justify-between items-center"
        >
          <div
            class="w-fit xs:order-2 xs:!my-4 lg:order-1 xs:grid xs:grid-cols-2 sm:flex sm:flex-row h-full"
          >
            <a href="https://careers.blizzard.com/"
              class="flex px-[16px] dark:hover:bg-blue3 h-[48px] justify-center transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center group"
            >
              <span
                class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
                >Careers</span
              >
            </a>
            <a href="https://www.blizzard.com/company/about/"
              class="flex px-[16px] dark:hover:bg-blue3 h-[48px] justify-center transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center"
            >
              <span
                class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
                >About</span
              >
            </a>
            <a href="https://www.battle.net/support/"
              class="flex px-[16px] dark:hover:bg-blue3 justify-center h-[48px] transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center"
            >
              <span
                class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
                >Support</span
              >
            </a>
            <a href="https://www.blizzard.com/company/contact"
              class="flex px-[16px] dark:hover:bg-blue3 h-[48px] justify-center transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center"
            >
              <span
                class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
                >Contact Us</span
              >
            </a>
            <a href="https://blizzard.gamespress.com/"
              class="flex px-[16px] dark:hover:bg-blue3 h-[48px] justify-center transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center"
            >
              <span
                class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
                >Press</span
              >
            </a>
            <a href="https://develop.battle.net/"
              class="flex px-[16px] dark:hover:bg-blue3 h-[48px] justify-center transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center"
            >
              <span
                class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
                >API</span
              >
            </a>
          </div>
          <div
            class="flex px-[16px] xs:order-1 lg:order-2 dark:hover:bg-blue3 h-[48px] transition-all rounded-[5px] cursor-pointer hover:bg-[#303237] transition-duration-1000 items-center group content-center"
          >
            <span
              class="inline-block font-ObjectSans text-[#fff] dark:text-blue3 dark:group-hover:text-white2 text-[14px]"
              >English (US)
              <svg
                class="w-[16px] h-[16px] fill-[#ffffffb8] group-hover:fill-[#fff] dark:fill-blue3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-labelledby="blz-icon-title-bn-chevron-down-filled"
                viewBox="0 0 24 24"
                part="icon"
              >
                <title id="blz-icon-title-bn-chevron-down-filled">
                  Chevron Down
                </title>
                <path
                  d="M18.646 9.354a.5.5 0 0 0 0-.707l-.703-.704a.5.5 0 0 0-.707 0L12 13.17 6.764 7.943a.5.5 0 0 0-.707 0l-.703.704a.5.5 0 0 0 0 .707l6.292 6.293a.5.5 0 0 0 .708 0l6.293-6.293Z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <span
          class="inline-block w-full xs:hidden lg:block h-px my-[10px] bg-[#303237]"
        ></span>
        <div
          class="w-full h-[81px] flex xs:flex-col xs:gap-8 lg:gap-0 lg:flex-row justify-between items-center"
        >
          <div
            class="flex xs:flex-col lg:flex-row justify-center xs:gap-8 lg:gap-0 items-center text-[#ffffff80]"
          >
            <div class="">
              <a
                href="#"
                class="xs:h-[48px] xs:order-1 xs:w-[166px] lg:h-[80px] lg:w-[240px] cursor-pointer"
              >
                <svg
                  class="xs:h-[48px] lg:h-[80px] block mx-auto lg:w-[240px] dark:text-blue3 text-[white]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  aria-labelledby="blz-icon-title-battlenet-logo"
                  viewBox="0 0 196 32"
                  part="icon"
                >
                  <title id="blz-icon-title-battlenet-logo">Battle.net</title>
                  <path
                    fill="#148EFF"
                    stroke="none"
                    d="M26.193 11.848c.895-2.755 1.063-5.267.453-7.17l-.017-.054c-.037-.103-.128-.321-.243-.321-.088 0-.089.146-.084.22l.006.043c.194 1.7-.326 4.124-1.371 6.663-2.143-.973-4.717-1.75-7.573-2.208-2.566-.413-5.023-.504-7.25-.322.264-1.752.919-2.971 1.993-3.229 1.478-.353 3.09.619 4.627 2.388q.399.054.798.118 1.138.183 2.234.434c-2.803-5.272-6.562-8.227-9.421-7.136-2.176.83-3.287 3.823-3.155 7.846-2.833.603-5.093 1.713-6.436 3.193l-.037.041c-.072.084-.215.272-.157.372.043.075.17.003.233-.038l.034-.026c1.375-1.018 3.735-1.78 6.456-2.145.229 2.343.843 4.96 1.873 7.662.926 2.429 2.076 4.602 3.348 6.44-1.65.648-3.034.69-3.793-.111-1.046-1.103-1.01-2.985-.246-5.202q-.152-.372-.297-.75a35 35 0 0 1-.741-2.151c-3.165 5.063-3.844 9.796-1.47 11.727 1.806 1.47 4.955.935 8.372-1.19 1.939 2.152 4.03 3.554 5.983 3.977l.055.012c.108.02.342.05.4-.05.044-.076-.082-.15-.149-.183l-.04-.017c-1.569-.681-3.409-2.344-5.085-4.518 1.914-1.37 3.874-3.21 5.699-5.454 1.64-2.016 2.947-4.098 3.904-6.119 1.385 1.106 2.113 2.282 1.8 3.34-.433 1.458-2.08 2.368-4.382 2.814a35 35 0 0 1-1.994 2.35c5.967.21 10.405-1.57 10.89-4.59.37-2.3-1.667-4.759-5.217-6.656m-5.183 6.026c-2.104 2.587-4.727 4.789-7.06 6.062a26.4 26.4 0 0 1-2.248-4.496c-1.188-3.116-1.784-6.489-1.72-9.146a26.4 26.4 0 0 1 5.018.301c3.292.53 6.511 1.7 8.78 3.083a26.4 26.4 0 0 1-2.77 4.196"
                  ></path>
                  <path
                    stroke="none"
                    d="M75.328 22.603 68.972 9.915a1.86 1.86 0 0 0-1.638-1.002h-3.3c-.685 0-1.32.391-1.638 1.002l-6.307 12.688c-.123.22.048.489.293.489h2.836a.45.45 0 0 0 .415-.244l1.394-2.787h9.362l1.394 2.787c.073.17.22.244.415.244h2.836c.22 0 .367-.269.294-.489M62.42 17.249l2.64-5.304a.38.38 0 0 1 .318-.196h.66c.147 0 .269.073.318.195l2.64 5.305zm133.256-7.994v2.152a.35.35 0 0 1-.343.342h-5.72v12.859a.24.24 0 0 1-.391.195l-2.836-2.42a1 1 0 0 1-.342-.733v-9.901h-4.596a.7.7 0 0 1-.611-.391l-1.1-2.2c-.049-.123.024-.245.146-.245h15.401c.22 0 .392.171.392.342m-30.68 2.738v2.616h10.438a1.419 1.419 0 0 1 0 2.836h-10.438V19.4c0 .489.415.904.904.904h11.759a.35.35 0 0 1 .342.342V22.8a.37.37 0 0 1-.342.342h-12.712a3.625 3.625 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.37.37 0 0 1-.342.342h-12.443c-.147-.024-.22.074-.22.22m-6.747-2.64v12.443c0 1.492-1.736 2.323-2.909 1.345l-10.977-9.314v8.85c0 .244-.195.44-.44.44h-2.762c-.245 0-.465-.196-.465-.44v-12.42c0-1.49 1.736-2.322 2.909-1.344l10.977 9.314v-8.85c0-.244.195-.464.44-.464h2.762c.318 0 .465.22.465.44m-34.2 2.64v2.616h7.285a1.418 1.418 0 0 1 0 2.836h-7.261V19.4c0 .489.416.904.905.904h11.758a.35.35 0 0 1 .342.342V22.8a.35.35 0 0 1-.342.342h-12.712a3.626 3.626 0 0 1-3.618-3.618v-8.776c0-1.003.807-1.81 1.809-1.81h14.521a.35.35 0 0 1 .342.343v2.151a.35.35 0 0 1-.342.342h-12.443c-.147-.024-.244.074-.244.22m-5.183 8.605v2.152a.35.35 0 0 1-.342.342h-10.219a3.626 3.626 0 0 1-3.618-3.618V9.255a.35.35 0 0 1 .343-.342h3.006a.35.35 0 0 1 .343.342v10.097c0 .489.415.904.904.904h9.241c.22 0 .342.171.342.342M102.781 9.255v2.152a.35.35 0 0 1-.343.342h-5.329v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.757v-9.876H90.02a.7.7 0 0 1-.611-.392l-1.1-2.2c-.05-.098.024-.22.17-.22h13.959a.35.35 0 0 1 .343.342m-50.604 6.6c.66-.244 2.005-.88 2.005-2.688 0-3.105-2.298-4.254-5.036-4.254h-10.56c-.148 0-.343.147-.343.342V22.75a.35.35 0 0 0 .342.342h11.881c1.736-.024 4.23-1.002 4.23-4.205.024-2.004-1.785-2.835-2.519-3.031M41.885 11.97c0-.147.098-.22.22-.22h6.503c.684 0 2.176 0 2.176 1.418s-1.516 1.418-2.176 1.418h-6.723zm7.505 8.263h-7.285c-.146 0-.22-.098-.22-.22V17.42h7.53c.733 0 1.907 0 1.907 1.418 0 1.443-1.345 1.394-1.932 1.394M86.548 9.255v2.152a.35.35 0 0 1-.342.342h-4.18v12.859a.24.24 0 0 1-.391.195l-2.86-2.445a1 1 0 0 1-.343-.733v-9.9h-4.547a.7.7 0 0 1-.61-.392l-1.1-2.2c-.025-.098.048-.22.17-.22h13.861c.147 0 .342.147.342.342"
                  ></path>
                  <path
                    fill="#148EFF"
                    stroke="none"
                    d="M134.805 16.003c0-.978.782-1.785 1.784-1.785.978 0 1.785.807 1.785 1.785s-.782 1.785-1.785 1.785a1.78 1.78 0 0 1-1.784-1.785"
                  ></path>
                  <path
                    stroke="none"
                    d="M192.975 22.187a1.418 1.418 0 1 1-.003-2.837 1.418 1.418 0 0 1 .003 2.837m0-2.613a1.197 1.197 0 1 0-.004 2.398 1.197 1.197 0 0 0 .004-2.4zm.363 2.014-.5-.673h-.173v.673h-.283v-1.634h.586c.425 0 .611.138.611.46a.443.443 0 0 1-.437.477l.545.693zm-.141-1.376a.7.7 0 0 0-.269-.037h-.263v.542h.263c.251 0 .372-.093.372-.294a.24.24 0 0 0-.103-.212z"
                  ></path>
                </svg>
              </a>
            </div>
            <div
              class="lg:ml-[40px] xs:order-3 lg:order-2 xs:gap-1 lg:gap-0 flex flex-col"
            >
              <span
                class="text-[12px] inline-block xs:mx-auto lg:mx-0 dark:text-blue3 font-NotoSans"
                >©2025 Blizzard Entertainment, Inc.</span
              >
              <span
                class="text-[12px] inline-block xs:mx-auto lg:mx-0 dark:text-blue3 font-NotoSans"
                >All trademarks referenced herein are the properties of their
                respective owners.</span
              >
              <div
                class="mt-[20px] flex xs:justify-center xs:items-center lg:justify-start flex-row gap-3"
              >
                <a href="https://www.blizzard.com/en-us/privacy"
                  class="flex h-full transition-all cursor-pointer transition-duration-1000 group items-center gap-1 content-center"
                >
                  <span
                    class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:group-hover:text-blue2 dark:text-blue3 text-[12px] text-[#ffffffb8]"
                    >Privacy</span
                  >
                </a>
                <a href="https://www.blizzard.com/legal/"
                  class="flex h-full transition-all cursor-pointer transition-duration-1000 group items-center gap-1 content-center"
                >
                  <span
                    class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:group-hover:text-blue2 dark:text-blue3 text-[12px] text-[#ffffffb8]"
                    >Legal</span
                  >
                </a>
                <a href="https://www.blizzard.com/tou"
                  class="flex h-full transition-all cursor-pointer transition-duration-1000 group items-center gap-1 content-center"
                >
                  <span
                    class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:group-hover:text-blue2 dark:text-blue3 text-[12px] text-[#ffffffb8]"
                    >Terms</span
                  >
                </a>
                <a href="https://account.battle.net/login/cookies"
                  class="flex h-full transition-all cursor-pointer transition-duration-1000 group items-center gap-1 content-center"
                >
                  <span
                    class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:group-hover:text-blue2 dark:text-blue3 text-[12px] text-[#ffffffb8]"
                    >Cookie Policy</span
                  >
                </a>
                <a href="https://account.battle.net/login/cookies#settings"
                  class="flex h-full transition-all cursor-pointer transition-duration-1000 group items-center gap-1 content-center"
                >
                  <span
                    class="inline-block font-NotoSansBold group-hover:text-[#fff] dark:group-hover:text-blue2 dark:text-blue3 text-[12px] text-[#ffffffb8]"
                    >Cookie Settings</span
                  >
                </a>
              </div>
            </div>
          </div>
          <div class="flex xs:order-2 lg:order-3 gap-3">
            <a href="https://twitter.com/battlenet"
              class="flex rounded-[100px] dark:bg-blue3 dark:hover:bg-blue2 w-[48px] h-[48px] transition-all cursor-pointer hover:bg-[#303237] bg-[#ffffff10] transition-duration-1000 group items-center gap-1 content-center"
            >
              <svg
                class="w-[24px] h-[48px] mx-auto !stroke-2 !fill-[#ffffff] dark:group-hover:fill-white2 dark:fill-blue3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-mathematical-double-struck-capital-x"
                viewBox="0 0 48 48"
                part="icon"
              >
                <title id="blz-icon-title-mathematical-double-struck-capital-x">
                  𝕏
                </title>
                <path
                  stroke="none"
                  d="M27.032 21.551 38.936 8h-2.82l-10.34 11.764L17.521 8H8l12.484 17.791L8 40h2.82l10.914-12.426L30.452 40h9.521M11.838 10.083h4.332L36.114 38.02h-4.333"
                ></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/battlenet"
              class="flex rounded-[100px] dark:bg-blue3 dark:hover:bg-blue2 w-[48px] h-[48px] transition-all cursor-pointer hover:bg-[#303237] bg-[#ffffff10] transition-duration-1000 group items-center gap-1 content-center"
            >
              <svg
                class="w-[24px] h-[48px] mx-auto !stroke-2 !fill-[#ffffff] dark:group-hover:fill-white2 dark:fill-blue3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-facebook"
                viewBox="0 0 48 48"
                part="icon"
              >
                <title id="blz-icon-title-facebook">Facebook</title>
                <path
                  stroke="none"
                  d="M42 24.11C42 14.108 33.941 6 24 6S6 14.108 6 24.11C6 33.15 12.582 40.641 21.188 42V29.345h-4.57V24.11h4.57v-3.99c0-4.539 2.687-7.046 6.798-7.046 1.97 0 4.03.354 4.03.354v4.457h-2.27c-2.236 0-2.933 1.396-2.933 2.828v3.397h4.992l-.798 5.235h-4.195V42C35.419 40.641 42 33.15 42 24.11"
                ></path>
              </svg>
            </a>
            <a href="https://instagram.com/battlenet"
              class="flex rounded-[100px] dark:bg-blue3 dark:hover:bg-blue2 w-[48px] h-[48px] transition-all cursor-pointer hover:bg-[#303237] bg-[#ffffff10] transition-duration-1000 group items-center gap-1 content-center"
            >
              <svg
                class="w-[24px] h-[48px] mx-auto !stroke-2 !fill-[#ffffff] dark:group-hover:fill-white2 dark:fill-blue3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                aria-labelledby="blz-icon-title-instagram"
                viewBox="0 0 48 48"
                part="icon"
              >
                <title id="blz-icon-title-instagram">Instagram</title>
                <path
                  stroke="none"
                  d="M24 6c-4.889 0-5.501.02-7.421.108-1.916.088-3.225.392-4.37.837A8.8 8.8 0 0 0 9.021 9.02a8.8 8.8 0 0 0-2.076 3.188c-.445 1.145-.75 2.454-.837 4.37C6.021 18.499 6 19.11 6 24s.02 5.502.108 7.421c.088 1.916.392 3.225.837 4.37a8.8 8.8 0 0 0 2.076 3.188c1 1 2.005 1.616 3.188 2.076 1.145.445 2.454.75 4.37.837 1.92.087 2.532.108 7.421.108s5.502-.02 7.421-.108c1.916-.088 3.225-.392 4.37-.837a8.8 8.8 0 0 0 3.188-2.076c1-1 1.616-2.005 2.076-3.188.445-1.145.75-2.454.837-4.37.087-1.92.108-2.532.108-7.421s-.02-5.501-.108-7.421c-.088-1.916-.392-3.225-.837-4.37a8.8 8.8 0 0 0-2.076-3.188 8.8 8.8 0 0 0-3.188-2.076c-1.145-.445-2.454-.75-4.37-.837C29.501 6.021 28.89 6 24 6m0 3.243c4.806 0 5.375.019 7.273.105 1.756.08 2.709.373 3.343.62.84.326 1.44.717 2.07 1.346s1.02 1.23 1.346 2.07c.247.634.54 1.588.62 3.343.086 1.898.105 2.467.105 7.273s-.019 5.375-.105 7.273c-.08 1.756-.373 2.709-.62 3.343a5.6 5.6 0 0 1-1.346 2.07c-.63.63-1.23 1.02-2.07 1.346-.634.247-1.587.54-3.343.62-1.897.086-2.466.105-7.273.105s-5.376-.019-7.273-.105c-1.755-.08-2.709-.373-3.343-.62a5.6 5.6 0 0 1-2.07-1.346 5.6 5.6 0 0 1-1.346-2.07c-.247-.634-.54-1.587-.62-3.343-.086-1.898-.105-2.467-.105-7.273s.019-5.375.105-7.273c.08-1.755.373-2.709.62-3.343.326-.84.717-1.44 1.346-2.07s1.23-1.02 2.07-1.346c.634-.247 1.588-.54 3.343-.62 1.898-.086 2.467-.105 7.273-.105"
                ></path>
                <path
                  stroke="none"
                  d="M24 30a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-15.243a9.243 9.243 0 1 0 0 18.486 9.243 9.243 0 1 0 0-18.486m11.769-.365a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- topgoingbtn -->

    <a
      href="#headersectiontop"
      class="right-10 fixed bottom-10 z-50 cursor-pointer xs:w-[32px] xs:h-[32px] lg:w-[40px] lg:h-[40px] items-center justify-center dark:bg-blue3 bg-[#15171E] text-white rounded-[5px] flex outline-1 outline-gray-800 hover:outline-2 transition-all hover:outline-gray-500"
      id="topgoingbtn"
    >
      <svg
        class="lg:w-[20px] rotate-90 lg:h-[20px] xs:w-[20px] xs:h-[20px]"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-labelledby="blz-icon-title-bn-chevron-left-filled"
        viewBox="0 0 24 24"
        part="icon"
      >
        <title id="blz-icon-title-bn-chevron-left-filled">Chevron Left</title>
        <path
          d="M14.646 5.353a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 1 0 .706L10.83 12l5.227 5.236a.5.5 0 0 1 0 .707l-.703.703a.5.5 0 0 1-.708 0l-6.293-6.293a.5.5 0 0 1 0-.707z"
        ></path>
      </svg>
    </a>
`;const H=()=>` <div class="max-w-[1600px] mx-auto z-0 px-[16px] pb-[32px]">
      <div class="w-full mt-[48px] flex flex-col">
        <span class="text-[24px] text-white1 dark:text-blue3 font-ObjectSans"
          >Featured</span
        >
        <div
          id="gamesContainer2"
          class="w-full my-[10px] grid xs:grid-cols-1 xs:h-[2610px] sm:h-[1300px] sm:grid-cols-2 overflow-y-hidden md:grid-cols-3 md:h-[850px] lg:h-[1280px] xl:h-[860px] xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[411px] gap-[24px] [&>*]:bg-[#15171eea]"
        >
         
         
        </div>
      </div>
    </div>`,V=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/cart2.json")).json()).map(t=>`<a class="rounded-[5px] shadow-2xs" href="${t.destination}">
            <div
              class="relative cursor-pointer rounded-[5px] overflow-hidden shadow-2xs shadow-blue5 outline-0 h-[409px]"
            >
              <img
                src="${t.image.url}"
                class="w-full h-[156px] object-cover"
                alt=""
              />
              <div
                class="hover:bg-[#3e3e41] bg-[#2b2c2d] overflow-hidden dark:hover:bg-blue2 dark:bg-blue3 dark:text-[#e0e4e8b1] hover:-translate-y-[4px] p-[24px] duration-400 transition-all w-full h-[260px]"
              >
                <div class="flex gap-1 items-center">
                  <img
                    class="w-[24px] h-[24px] object-contain"
                    src="${t.franchiseIcon.iconUrl}"
                    alt=""
                  /><span
                    class="text-[#ffffffb8] uppercase dark:text-[#ffffffd6] text-[12px] font-ObjectSans"
                    >${t.name}</span
                  >
                </div>
                <h2
                  class="text-[18px] mt-2 leading-[22px] dark:text-[#ffffffd6] font-ObjectSans capitalize text-[#ffffffd6] line-clamp-2"
                >
                 ${t.title}
                </h2>
                <p
                  class="text-[#ffb400] dark:text-[#e0e4e8b1] line-clamp-3 mt-[4px] leading-[18px] font-NotoSans text-[14px]"
                >${t.marketingText}
                </p>
                <span
                  class="text-[#ffffffb8] dark:text-[#ffffffd6] capitalize mt-[2px] leading-[12px] text-[12px] font-NotoSans"
                  >${t.description}</span
                >
              </div>
              <span
                class="text-[16px] font-ObjectSans dark:text-[#ffffffd6] text-[#ffffffd6] absolute left-[24px] bottom-[24px]"
                >${t.price.fullAmount}</span
              >
            </div>
          </a>
         `);document.querySelector("#gamesContainer2").insertAdjacentHTML("afterbegin",e.join(""))},$=()=>` <div class="max-w-[1600px] mx-auto z-0 px-[16px] pb-[32px]">
      <div class="w-full mt-[48px] flex flex-col">
        <span class="text-[24px] text-white1 dark:text-blue3 font-ObjectSans"
          >Trending Now</span
        >
        <div
          id="gamesContainer3"
          class="w-full my-[10px] grid xs:grid-cols-1 xs:h-[2610px] sm:h-[1300px] sm:grid-cols-2 overflow-y-hidden md:grid-cols-3 md:h-[850px] lg:h-[1280px] xl:h-[860px] xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[411px] gap-[24px] [&>*]:bg-[#15171eea]"
        >
         
         
        </div>
      </div>
    </div>`,O=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/cart3.json")).json()).map(t=>`<a class="rounded-[5px] shadow-2xs" href="${t.destination}">
            <div
              class="relative cursor-pointer rounded-[5px] overflow-hidden shadow-2xs shadow-blue5 outline-0 h-[409px]"
            >
              <img
                src="${t.image.url}"
                class="w-full h-[156px] object-cover"
                alt=""
              />
              <div
                class="hover:bg-[#3e3e41] bg-[#2b2c2d] overflow-hidden dark:hover:bg-blue2 dark:bg-blue3 dark:text-[#e0e4e8b1] hover:-translate-y-[4px] p-[24px] duration-400 transition-all w-full h-[260px]"
              >
                <div class="flex gap-1 items-center">
                  <img
                    class="w-[24px] h-[24px] object-contain"
                    src="${t.franchiseIcon.iconUrl}"
                    alt=""
                  /><span
                    class="text-[#ffffffb8] uppercase dark:text-[#ffffffd6] text-[12px] font-ObjectSans"
                    >${t.name}</span
                  >
                </div>
                <h2
                  class="text-[18px] mt-2 leading-[22px] dark:text-[#ffffffd6] font-ObjectSans capitalize text-[#ffffffd6] line-clamp-2"
                >
                 ${t.title}
                </h2>
                <p
                  class="text-[#ffb400] dark:text-[#e0e4e8b1] line-clamp-3 mt-[4px] leading-[18px] font-NotoSans text-[14px]"
                >${t.marketingText}
                </p>
                <span
                  class="text-[#ffffffb8] dark:text-[#ffffffd6] capitalize mt-[2px] leading-[12px] text-[12px] font-NotoSans"
                  >${t.description}</span
                >
              </div>
              <span
                class="text-[16px] font-ObjectSans dark:text-[#ffffffd6] text-[#ffffffd6] absolute left-[24px] bottom-[24px]"
                >${t.price.fullAmount}</span
              >
            </div>
          </a>
         `);document.querySelector("#gamesContainer3").insertAdjacentHTML("afterbegin",e.join(""))},E=()=>` <div class="max-w-[1600px] mx-auto z-0 px-[16px] pb-[32px]">
      <div class="w-full mt-[48px] flex flex-col">
        <span class="text-[24px] text-white1 dark:text-blue3 font-ObjectSans"
          >Most Gifted</span
        >
        <div
          id="gamesContainer4"
          class="w-full my-[10px] grid xs:grid-cols-1 xs:h-[2610px] sm:h-[1300px] sm:grid-cols-2 overflow-y-hidden md:grid-cols-3 md:h-[850px] lg:h-[1280px] xl:h-[860px] xl:grid-cols-4 2xl:grid-cols-5 auto-rows-[411px] gap-[24px] [&>*]:bg-[#15171eea]"
        >
         
         
        </div>
      </div>
    </div>`,P=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/cart4.json")).json()).map(t=>`<a class="rounded-[5px] shadow-2xs" href="${t.destination}">
            <div
              class="relative cursor-pointer rounded-[5px] overflow-hidden shadow-2xs shadow-blue5 outline-0 h-[409px]"
            >
              <img
                src="${t.image.url}"
                class="w-full h-[156px] object-cover"
                alt=""
              />
              <div
                class="hover:bg-[#3e3e41] bg-[#2b2c2d] overflow-hidden dark:hover:bg-blue2 dark:bg-blue3 dark:text-[#e0e4e8b1] hover:-translate-y-[4px] p-[24px] duration-400 transition-all w-full h-[260px]"
              >
                <div class="flex gap-1 items-center">
                  <img
                    class="w-[24px] h-[24px] object-contain"
                    src="${t.franchiseIcon.iconUrl}"
                    alt=""
                  /><span
                    class="text-[#ffffffb8] uppercase dark:text-[#ffffffd6] text-[12px] font-ObjectSans"
                    >${t.name}</span
                  >
                </div>
                <h2
                  class="text-[18px] mt-2 leading-[22px] dark:text-[#ffffffd6] font-ObjectSans capitalize text-[#ffffffd6] line-clamp-2"
                >
                 ${t.title}
                </h2>
                <p
                  class="text-[#ffb400] dark:text-[#e0e4e8b1] line-clamp-3 mt-[4px] leading-[18px] font-NotoSans text-[14px]"
                >${t.marketingText}
                </p>
                <span
                  class="text-[#ffffffb8] dark:text-[#ffffffd6] capitalize mt-[2px] leading-[12px] text-[12px] font-NotoSans"
                  >${t.description}</span
                >
              </div>
              <span
                class="text-[16px] font-ObjectSans dark:text-[#ffffffd6] text-[#ffffffd6] absolute left-[24px] bottom-[24px]"
                >${t.price.fullAmount}</span
              >
            </div>
          </a>
         `);document.querySelector("#gamesContainer4").insertAdjacentHTML("afterbegin",e.join(""))};class D{constructor(){this.slides=document.querySelectorAll("#slide"),this.prevBtn=document.getElementById("prevbtn"),this.nextBtn=document.getElementById("nextbtn"),this.pauseBtn=document.getElementById("stopbtn"),this.pagination=document.getElementById("pagination"),this.currentIndex=0,this.autoPlayInterval=null,this.autoPlayDelay=5e3,this.init()}init(){this.slides.length!==0&&(this.showSlide(this.currentIndex),this.createPagination(),this.setupEventListeners(),this.startAutoPlay())}showSlide(l){this.slides.forEach((t,r)=>{t.style.opacity=r===l?"1":"0",t.style.zIndex=r===l?"1":"0"}),this.pagination.querySelectorAll(".pagination-dot").forEach((t,r)=>{t.classList.toggle("active",r===l)})}createPagination(){this.pagination.innerHTML="",this.slides.forEach((l,e)=>{const t=document.createElement("button");t.className=`pagination-dot cursor-pointer w-[40px] h-[4px] rounded-full mx-[4px] ${e===0?"active bg-[#ffffff7a]":"bg-[#ffffff7a]"}`,t.addEventListener("click",()=>{this.currentIndex=e,this.showSlide(e),this.resetAutoPlay()}),this.pagination.appendChild(t)})}setupEventListeners(){this.prevBtn.addEventListener("click",()=>{this.prevSlide(),this.resetAutoPlay()}),this.nextBtn.addEventListener("click",()=>{this.nextSlide(),this.resetAutoPlay()}),this.pauseBtn.addEventListener("click",()=>{this.toggleAutoPlay()})}toggleAutoPlay(){this.autoPlayInterval?(this.stopAutoPlay(),this.autoPlayInterval=null,this.pauseBtn.innerHTML='<svg class="w-[20px] cursor-pointer fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-play-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-play-filled">Play</title><path d="M7.768 5.489A.5.5 0 0 0 7 5.911v12.178a.5.5 0 0 0 .768.422l9.57-6.09a.5.5 0 0 0 0-.843L7.767 5.49Z"></path></svg>'):(this.startAutoPlay(),this.pauseBtn.innerHTML=`<svg
              
              class="w-[20px] cursor-pointer fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-pause-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-pause-filled">Pause</title>
              <path
                d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"
              ></path>
            </svg>`)}prevSlide(){this.currentIndex=(this.currentIndex-1+this.slides.length)%this.slides.length,this.showSlide(this.currentIndex)}nextSlide(){this.currentIndex=(this.currentIndex+1)%this.slides.length,this.showSlide(this.currentIndex)}startAutoPlay(){this.autoPlayInterval=setInterval(()=>{this.nextSlide()},this.autoPlayDelay)}stopAutoPlay(){clearInterval(this.autoPlayInterval)}resetAutoPlay(){this.stopAutoPlay(),this.startAutoPlay()}toggleAutoPlay(){this.autoPlayInterval?(this.stopAutoPlay(),this.autoPlayInterval=null,this.pauseBtn.innerHTML='<svg class="w-[20px] cursor-pointer fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-labelledby="blz-icon-title-bn-play-filled" viewBox="0 0 24 24" part="icon"><title id="blz-icon-title-bn-play-filled">Play</title><path d="M7.768 5.489A.5.5 0 0 0 7 5.911v12.178a.5.5 0 0 0 .768.422l9.57-6.09a.5.5 0 0 0 0-.843L7.767 5.49Z"></path></svg>'):(this.startAutoPlay(),this.pauseBtn.innerHTML=`<svg
              
              class="w-[20px] cursor-pointer fill-[#ffffff7a] hover:fill-[#ffffff] h-[20px] justify-self-start"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-labelledby="blz-icon-title-bn-pause-filled"
              viewBox="0 0 24 24"
              part="icon"
            >
              <title id="blz-icon-title-bn-pause-filled">Pause</title>
              <path
                d="M10 18.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5zm4.5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"
              ></path>
            </svg>`)}}const I=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Warcraft.json")).json()).map(t=>`<a
                href="./loinsignup.html"
                class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
              >
                <img
                  class="w-[35px] h-[35px]"
                  src="${t.icon.url}"
                  alt=""
                />
                <div class="flex flex-col gap-[3px]">
                  <span
                    class="inline-block font-ObjectSans text-start leading-[14px] dark:group-hover:text-[white] text-[14px] dark:!text-white group-hover:text-white text-[#fff]"
                    >${t.text}</span
                  >
                  <span
                    class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:text-[#dbdbdbce] text-[#ffffffa0]"
                    >${t.category}</span
                  >
                </div>
              </a>`);document.querySelector("#dropdown1").insertAdjacentHTML("afterbegin",e.join(""))},_=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Diablo.json")).json()).map(t=>`<a
                href="./loinsignup.html"
                class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
              >
                <img
                  class="w-[35px] h-[35px]"
                  src="${t.icon.url}"
                  alt=""
                />
                <div class="flex flex-col gap-[3px]">
                  <span
                    class="inline-block font-ObjectSans text-start leading-[14px] dark:group-hover:text-[white] text-[14px] dark:!text-white group-hover:text-white text-[#fff]"
                    >${t.text}</span
                  >
                  <span
                    class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:text-[#dbdbdbce] text-[#ffffffa0]"
                    >${t.category}</span
                  >
                </div>
              </a>`);document.querySelector("#dropdown2").insertAdjacentHTML("afterbegin",e.join(""))},Q=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Overwatch.json")).json()).map(t=>`<a
                href="./loinsignup.html"
                class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
              >
                <img
                  class="w-[35px] h-[35px]"
                  src="${t.icon.url}"
                  alt=""
                />
                <div class="flex flex-col gap-[3px]">
                  <span
                    class="inline-block font-ObjectSans text-start leading-[14px] dark:group-hover:text-[white] text-[14px] dark:!text-white group-hover:text-white text-[#fff]"
                    >${t.text}</span
                  >
                  <span
                    class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:text-[#dbdbdbce] text-[#ffffffa0]"
                    >${t.category}</span
                  >
                </div>
              </a>`);document.querySelector("#dropdown3").insertAdjacentHTML("afterbegin",e.join(""))},F=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Call-of-Duty.json")).json()).map(t=>`<a
                href="./loinsignup.html"
                class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
              >
                <img
                  class="w-[35px] h-[35px]"
                  src="${t.icon.url}"
                  alt=""
                />
                <div class="flex flex-col gap-[3px]">
                  <span
                    class="inline-block font-ObjectSans text-start leading-[14px] dark:group-hover:text-[white] text-[14px] dark:!text-white group-hover:text-white text-[#fff]"
                    >${t.text}</span
                  >
                  <span
                    class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:text-[#dbdbdbce] text-[#ffffffa0]"
                    >${t.category}</span
                  >
                </div>
              </a>`);document.querySelector("#dropdown4").insertAdjacentHTML("afterbegin",e.join(""))},Z=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/DOOM.json")).json()).map(t=>`<a
                href="./loinsignup.html"
                class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
              >
                <img
                  class="w-[35px] h-[35px]"
                  src="${t.icon.url}"
                  alt=""
                />
                <div class="flex flex-col gap-[3px]">
                  <span
                    class="inline-block font-ObjectSans text-start leading-[14px] dark:group-hover:text-[white] text-[14px] dark:!text-white group-hover:text-white text-[#fff]"
                    >${t.text}</span
                  >
                  <span
                    class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:text-[#dbdbdbce] text-[#ffffffa0]"
                    >${t.category}</span
                  >
                </div>
              </a>`);document.querySelector("#dropdown5").insertAdjacentHTML("afterbegin",e.join(""))},G=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/More.json")).json()).map(t=>`<a
                href="./loinsignup.html"
                class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-[#ffffff46] transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
              >
                <img
                  class="w-[35px] h-[35px]"
                  src="${t.icon.url}"
                  alt=""
                />
                <div class="flex flex-col gap-[3px]">
                  <span
                    class="inline-block font-ObjectSans text-start leading-[14px] dark:group-hover:text-[white] text-[14px] dark:!text-white group-hover:text-white text-[#fff]"
                    >${t.text}</span
                  >
                  <span
                    class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:text-[#dbdbdbce] text-[#ffffffa0]"
                    >${t.category}</span
                  >
                </div>
              </a>`);document.querySelector("#dropdown6").insertAdjacentHTML("afterbegin",e.join(""))},U=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Warcraft.json")).json()).map(t=>`<li >
                      <a 
                        href="${t.destination}"
                        class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
                      >
                        <img
                          class="w-[35px] h-[35px]"
                          src="${t.icon.url}"
                          alt=""
                        />
                        <div class="flex flex-col gap-[3px]">
                          <span
                            class="inline-block font-ObjectSans text-start leading-[14px] !dark:group-hover:text-[white] text-[14px] dark:text-blue3 dark:group-hover:text-white text-[#fff]"
                            >${t.text}</span
                          >
                          <span
                            class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:group-hover:text-white dark:text-[#204151ce] text-[#ffffffa0]"
                            >${t.category}</span
                          >
                        </div>
                      </a>
                    </li>`);document.querySelector("#dropdownsum1").insertAdjacentHTML("afterbegin",e.join(""))},Y=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Diablo.json")).json()).map(t=>`<li >
                      <a 
                        href="${t.destination}"
                        class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
                      >
                        <img
                          class="w-[35px] h-[35px]"
                          src="${t.icon.url}"
                          alt=""
                        />
                        <div class="flex flex-col gap-[3px]">
                          <span
                            class="inline-block font-ObjectSans text-start leading-[14px] !dark:group-hover:text-[white] text-[14px] dark:text-blue3 dark:group-hover:text-white text-[#fff]"
                            >${t.text}</span
                          >
                          <span
                            class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:group-hover:text-white dark:text-[#204151ce] text-[#ffffffa0]"
                            >${t.category}</span
                          >
                        </div>
                      </a>
                    </li>`);document.querySelector("#dropdownsum2").insertAdjacentHTML("afterbegin",e.join(""))},W=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Overwatch.json")).json()).map(t=>`<li >
                      <a 
                        href="${t.destination}"
                        class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
                      >
                        <img
                          class="w-[35px] h-[35px]"
                          src="${t.icon.url}"
                          alt=""
                        />
                        <div class="flex flex-col gap-[3px]">
                          <span
                            class="inline-block font-ObjectSans text-start leading-[14px] !dark:group-hover:text-[white] text-[14px] dark:text-blue3 dark:group-hover:text-white text-[#fff]"
                            >${t.text}</span
                          >
                          <span
                            class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:group-hover:text-white dark:text-[#204151ce] text-[#ffffffa0]"
                            >${t.category}</span
                          >
                        </div>
                      </a>
                    </li>`);document.querySelector("#dropdownsum3").insertAdjacentHTML("afterbegin",e.join(""))},K=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/Call-of-Duty.json")).json()).map(t=>`<li >
                      <a 
                        href="${t.destination}"
                        class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
                      >
                        <img
                          class="w-[35px] h-[35px]"
                          src="${t.icon.url}"
                          alt=""
                        />
                        <div class="flex flex-col gap-[3px]">
                          <span
                            class="inline-block font-ObjectSans text-start leading-[14px] !dark:group-hover:text-[white] text-[14px] dark:text-blue3 dark:group-hover:text-white text-[#fff]"
                            >${t.text}</span
                          >
                          <span
                            class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:group-hover:text-white dark:text-[#204151ce] text-[#ffffffa0]"
                            >${t.category}</span
                          >
                        </div>
                      </a>
                    </li>`);document.querySelector("#dropdownsum4").insertAdjacentHTML("afterbegin",e.join(""))},R=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/DOOM.json")).json()).map(t=>`<li >
                      <a 
                        href="${t.destination}"
                        class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
                      >
                        <img
                          class="w-[35px] h-[35px]"
                          src="${t.icon.url}"
                          alt=""
                        />
                        <div class="flex flex-col gap-[3px]">
                          <span
                            class="inline-block font-ObjectSans text-start leading-[14px] !dark:group-hover:text-[white] text-[14px] dark:text-blue3 dark:group-hover:text-white text-[#fff]"
                            >${t.text}</span
                          >
                          <span
                            class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:group-hover:text-white dark:text-[#204151ce] text-[#ffffffa0]"
                            >${t.category}</span
                          >
                        </div>
                      </a>
                    </li>`);document.querySelector("#dropdownsum5").insertAdjacentHTML("afterbegin",e.join(""))},X=async()=>{let e=(await(await fetch("https://nimazafari.github.io/BattleNet-API/More.json")).json()).map(t=>`<li >
                      <a 
                        href="${t.destination}"
                        class="h-[55px] px-[12px] hover:bg-[#303237] dark:hover:bg-blue3 transition-all transition-duration-1000 rounded-[5px] group flex items-center cursor-pointer gap-2 content-center justify-start"
                      >
                        <img
                          class="w-[35px] h-[35px]"
                          src="${t.icon.url}"
                          alt=""
                        />
                        <div class="flex flex-col gap-[3px]">
                          <span
                            class="inline-block font-ObjectSans text-start leading-[14px] !dark:group-hover:text-[white] text-[14px] dark:text-blue3 dark:group-hover:text-white text-[#fff]"
                            >${t.text}</span
                          >
                          <span
                            class="inline-block font-NotoSans text-start leading-[12px] text-[12px] dark:group-hover:text-white dark:text-[#204151ce] text-[#ffffffa0]"
                            >${t.category}</span
                          >
                        </div>
                      </a>
                    </li>`);document.querySelector("#dropdownsum6").insertAdjacentHTML("afterbegin",e.join(""))};M(m,k,N,C(),z(),H(),$(),E(),q,T);A().then(()=>{new D});I();_();Q();F();Z();G();U();Y();W();K();R();X();y();V();O();P();j();S();L();B();
