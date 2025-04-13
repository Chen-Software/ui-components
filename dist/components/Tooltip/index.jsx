var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Tooltip as TooltipBase } from "./tooltip";
export var Tooltip = function (_a) {
    var content = _a.content, props = __rest(_a, ["content"]);
    return (<TooltipBase.Root {...props}>
		<TooltipBase.Trigger>{props.trigger}</TooltipBase.Trigger>
		<TooltipBase.Positioner>
			<TooltipBase.Arrow>
				<TooltipBase.ArrowTip />
			</TooltipBase.Arrow>
			<TooltipBase.Content>{content}</TooltipBase.Content>
		</TooltipBase.Positioner>
	</TooltipBase.Root>);
};
export * from "./tooltip";
