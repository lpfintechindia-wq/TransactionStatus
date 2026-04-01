import svgPaths from "./svg-6tta4s468m";

function Container3() {
  return <div className="absolute blur-[40px] border border-[#c07bfc] border-solid left-0 opacity-38 rounded-[26843500px] size-[56px] top-0" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute left-0 size-[56px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon">
          <path d={svgPaths.p18fb3a80} id="Vector" stroke="url(#paint0_linear_5_100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p2b701700} id="Vector_2" stroke="url(#paint1_linear_5_100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_100" x1="45.9841" x2="-12.5622" y1="-13.476" y2="21.8164">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_100" x1="47.8528" x2="15.7091" y1="0.263951" y2="25.4535">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[56px] top-0" data-name="Container">
      <Container3 />
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-1/2 not-italic text-[20px] text-center text-white top-[-1.2px] whitespace-nowrap">Payment Successful</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#f0fdf4] text-[12px] text-center">Your transaction has been completed</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[69.988px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(192.716deg, rgb(192, 123, 252) 7.4574%, rgb(75, 27, 145) 99.258%)" }}>
      <div className="content-stretch flex flex-col gap-[2px] items-start pt-[12px] px-[24px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#45556c] text-[12px] text-center">Amount Paid</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-1/2 not-italic text-[#0f172b] text-[36px] text-center top-[-2px] whitespace-nowrap">₹100.00</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px] text-center">INR</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[79.975px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gradient-to-b from-[#f0fdf4] h-[112.775px] relative shrink-0 to-white w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[16px] px-[24px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#4b1b91] h-[16px] left-0 rounded-[26843500px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <Text />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#0f172b] text-[14px] top-[-0.2px] whitespace-nowrap">Order Information</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#62748e] text-[12px]">Order ID</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Consolas:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0f172b] text-[12px] whitespace-nowrap">ORD_20260401061355_H6864</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[33.975px] relative shrink-0 w-[158.35px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.34%_8.33%_8.32%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p1d5c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.34%_33.33%_33.32%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p2c300d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[33.975px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Button />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f8fafc] h-[57.975px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[85.975px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container10 />
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#4b1b91] h-[16px] left-0 rounded-[26843500px] top-[2px] w-[4px]" data-name="Text" />;
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 2">
      <Text1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#0f172b] text-[14px] top-[-0.2px] whitespace-nowrap">Transaction Details</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[86.175px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Customer Name</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[32.163px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f172b] text-[12px] whitespace-nowrap">Shaily</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[32.788px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pb-[0.8px] pt-[8px] relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[74.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Transaction ID</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[118.763px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Consolas:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0f172b] text-[12px] whitespace-nowrap">LPI177502413508001</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[32.788px] items-start justify-between pb-[0.8px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.988px] relative shrink-0 w-[32.112px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">Status</p>
      </div>
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#4b1b91] left-[8.25px] rounded-[26843500px] size-[4px] top-[9.3px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="bg-[#e4c5ff] h-[21px] relative rounded-[26843500px] shrink-0 w-[90px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text8 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16.25px] not-italic text-[#5d3991] text-[12px] top-[3.31px] whitespace-nowrap">SUCCESS</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[36.788px] items-start justify-between pb-[0.8px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[66.85px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">{`Date & Time`}</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[114.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#0f172b] text-[12px] whitespace-nowrap">01-Apr-2026 11:45:35</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[31.988px] items-start justify-between pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[158.35px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[186.35px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[320.325px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[16px] px-[24px] relative size-full">
        <Container9 />
        <Container13 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#e4c5ff] left-[267.88px] rounded-[26843500px] size-[28px] top-0" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[14.81px] not-italic text-[#5d3991] text-[12px] text-center top-[6px] whitespace-nowrap">26</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[91.45px] top-0">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[178.95px] not-italic text-[#45556c] text-[12px] text-center top-[6px] whitespace-nowrap">{`Redirecting to merchant app in `}</p>
      <Text11 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[322.88px] not-italic text-[#45556c] text-[12px] text-center top-[6px] whitespace-nowrap">{` seconds`}</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <Group />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[53.6px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[12.8px] px-[12.8px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[312.28px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p287e9400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[138.75px] top-[11.8px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[223.25px] not-italic text-[14px] text-center text-white top-[11.8px] whitespace-nowrap">Go to Merchant App Now</p>
      <Icon2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(188.893deg, rgb(192, 123, 252) 7.4574%, rgb(75, 27, 145) 99.258%), linear-gradient(90deg, rgb(0, 166, 62) 0%, rgb(0, 153, 102) 100%)" }}>
      <Group1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f8fafc] h-[134.4px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[12.8px] px-[24px] relative size-full">
        <Container20 />
        <Button1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[637.487px] items-start overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container8 />
      <Container19 />
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] h-[705px] items-start ml-0 mt-0 relative row-1 w-[514.5px]" data-name="Container">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container />
    </div>
  );
}

export default function RedesignInterface() {
  return (
    <div className="content-stretch flex items-center justify-center px-[253.6px] relative size-full" data-name="Redesign Interface" style={{ backgroundImage: "linear-gradient(126.05deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Group2 />
    </div>
  );
}