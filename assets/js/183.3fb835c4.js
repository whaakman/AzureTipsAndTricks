(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{463:function(e,r,t){"use strict";t.r(r);var s=t(43),o=Object(s.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("🔥  The FREE Azure Developer Guide eBook is now "),t("a",{attrs:{href:"http://aka.ms/azuredevebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("available!"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/concepts-diagnostics?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS) Diagnostics"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=d87JY3oL-A8&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=5&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn how to use Azure Kubernetes Service Diagnostics"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"diagnosing-kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diagnosing-kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Diagnosing Kubernetes")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),t("OutboundLink")],1),e._v(" enables you to run multiple containers and orchestrate them by scaling them, securing them and tying them together. A solution that runs inside a Kubernetes cluster can quickly become complex. This makes it more difficult to pinpoint issues and resolve them quickly.")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/concepts-diagnostics?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Diagnostics overview"),t("OutboundLink")],1),e._v(" in Azure Kubernetes Service can help you to identify, diagnose and resolve issues in your Kubernetes cluster. In this post, we'll take a look at what the Diagnostics overview can do for us.")]),e._v(" "),t("h4",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),t("ul",[t("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),t("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),t("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),t("li",[e._v("A running Azure Kubernetes Service (AKS) cluster that runs an application in one or more nodes. You can set one up by following "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/kubernetes-walkthrough?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("this walkthrough."),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("The "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),t("OutboundLink")],1),e._v(". You can "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),t("OutboundLink")],1),e._v(". Or you can use the "),t("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"using-azure-kubernetes-service-diagnostics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-azure-kubernetes-service-diagnostics","aria-hidden":"true"}},[e._v("#")]),e._v(" Using Azure Kubernetes Service Diagnostics")]),e._v(" "),t("p",[e._v("Let's try it out. I have a Kubernetes cluster running in Azure that is running a sample application. I've deployed it by following the steps in "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/kubernetes-walkthrough?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("this walkthrough."),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("It should be ready to go. It has a frontend node and I can check how to reach it with the "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),t("OutboundLink")],1),e._v(" (or "),t("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),t("OutboundLink")],1),e._v(") with the "),t("strong",[e._v("kubectl get service")]),e._v(" command.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/52aksservices.png")}}),e._v(" "),t("p",[e._v("(Check AKS service endpoints)")]),e._v(" "),t("p",[e._v("But when I try to open the azure-vote-front service in a browser, it doesn't work and shows an error.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/52error.png")}}),e._v(" "),t("p",[e._v("(Service doesn't work and shows an error)")]),e._v(" "),t("p",[e._v("Let's find out why this isn't working.")]),e._v(" "),t("ol",[t("li",[e._v("Go to the "),t("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Open the Azure Kubernetes Service cluster")]),e._v(" "),t("li",[e._v("Navigate to the "),t("strong",[e._v("Diagnose and solve problems")]),e._v(" menu")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/52diagnostics.png")}}),e._v(" "),t("p",[e._v("(Diagnose and solve problems menu in AKS)")]),e._v(" "),t("p",[e._v('Here, you can search for keywords, like "Failures", or describe the problem. Click on the search textbox to see some examples of what you can search for and diagnose. You can see the entire list of issues that can be diagnosed '),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/concepts-diagnostics?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". Let's click on "),t("strong",[e._v("Failures")]),e._v(" to see if we can find out what went wrong. This shows that there are issues with one or more Nodes. Click on the issues to drill down into them. In my case, the issue is that my Node has been powered off and it needs to be restarted.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/52nodeerror.png")}}),e._v(" "),t("p",[e._v("(Node issues in the Diagnose and resolve problems feature)")]),e._v(" "),t("p",[e._v("I need to upgrade my cluster anyways, so I'll do just that. This will automatically restart my nodes as well and probably solve the issue. I upgrade my cluster by navigating to the "),t("strong",[e._v("Upgrade menu")]),e._v(", selecting the latest version and saving the changes. This takes a while.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/52upgrade.png")}}),e._v(" "),t("p",[e._v("(Upgrade cluster restarts nodes)")]),e._v(" "),t("p",[e._v("When my cluster is upgraded, my nodes are restarted. Let's try to use the service again in the browser. The application loads successfully.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/52appworksagain.png")}}),e._v(" "),t("p",[e._v("(Service works after node restart)")]),e._v(" "),t("h4",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("Diagnosing issues in "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/intro-kubernetes?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),t("OutboundLink")],1),e._v(" is now a lot easier with "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/concepts-diagnostics?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS) Diagnostics"),t("OutboundLink")],1),e._v(". You can ask the intelligent diagnostics feature what you want it to investigate and it will tell you if anything is wrong and what the issues are and how to resolve them. Go and check it out!")])])},[],!1,null,null,null);r.default=o.exports}}]);