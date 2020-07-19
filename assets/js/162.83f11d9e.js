(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{448:function(e,a,t){"use strict";t.r(a);var r=t(43),s=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("🔥 Make sure you "),t("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),t("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),t("p",[e._v("💡 Learn more :  "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/what-is-ip-address-168-63-129-16?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is IP address 168.63.129.16?"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"what-is-ip-address-168-63-129-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-ip-address-168-63-129-16","aria-hidden":"true"}},[e._v("#")]),e._v(" What is IP address 168.63.129.16?")]),e._v(" "),t("p",[e._v("Author: Kumar Allamraju")]),e._v(" "),t("p",[e._v("Twitter: "),t("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kumarallamraju"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Recently I was engaged to help on customer's issue in which their "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Network Load Balancer"),t("OutboundLink")],1),e._v(" is unable to reach their backend instances because the load balancer declared them as  unhealthy. However they can directly reach the backend instances and able to execute the application but unable to reach the same via Azure NLB.")]),e._v(" "),t("h2",{attrs:{id:"analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analysis","aria-hidden":"true"}},[e._v("#")]),e._v(" Analysis")]),e._v(" "),t("p",[e._v("The first thing I did was to check their load balancer's health probes. However they are using \"Basic Load Balancer\" and the health probes are only available in the standard tier. I end up working with my Cloud Ops/Support team to see what's going on for this customer's load balancer. Further investigation revealed that customer's Network Security Group (NSG), with a rule named ‘defaultdenyinbound’ is not accepting any traffic other than their VNet IP's. Due to this rule, NLB was unable to send probes to backend instances. I recommended the customer to make the following changes")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Open the Azure portal and browse to the "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/security-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Network Security Group"),t("OutboundLink")],1),e._v(" blade assigned to your Network Load Balancer")])]),e._v(" "),t("li",[t("p",[e._v("Add an Allow rule for IP address 168.63.129.16 that has a lower number (higher priority) than the Block rule")])]),e._v(" "),t("li",[t("p",[e._v("Save changes and check the Health Probe Status by going to Load Balancer Monitoring blade to view the backend pool health")])])]),e._v(" "),t("p",[e._v("The public IP address 168.63.129.16 is used in all Azure public regions and all national clouds. This special public IP address is owned by Microsoft and will not change. It is allowed by the default network security group rule. We recommend that you allow this IP address in any local firewall policies in both inbound and outbound directions. The communication between this special IP address and the resources is safe because only the internal Azure platform can source a message from this IP address. If this address is blocked, unexpected behavior can occur in a variety of scenarios.")]),e._v(" "),t("p",[e._v("Azure Load Balancer probes  originates from this IP address. If customer's block this IP address, their probes will fail leading to the above situation. The customer is convinced with the above explanation. After allowing this IP in their local firewall policies, they are able to reach the backend instances via Azure NLB and the problem is solved.")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/what-is-ip-address-168-63-129-16?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is IP address 168.63.129.16?"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-custom-probe-overview/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Load Balancer health probes "),t("OutboundLink")],1)])])])])},[],!1,null,null,null);a.default=s.exports}}]);