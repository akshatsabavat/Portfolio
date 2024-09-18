"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({});
  const [lineStyle, setLineStyle] = React.useState<React.CSSProperties>({});
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const updateIndicator = React.useCallback(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(
        '[data-state="active"]'
      ) as HTMLElement;
      const tabsList = tabsRef.current.querySelector(
        '[role="tablist"]'
      ) as HTMLElement;
      if (activeTab && tabsList) {
        const tabsListRect = tabsList.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();

        setIndicatorStyle({
          top: `${activeTabRect.top - tabsListRect.top}px`,
          height: `${activeTabRect.height}px`,
        });

        setLineStyle({
          top: `${tabsListRect.top - tabsListRect.top}px`,
          height: `${tabsListRect.height}px`,
        });
      }
    }
  }, []);

  React.useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    const observer = new MutationObserver(updateIndicator);
    if (tabsRef.current) {
      observer.observe(tabsRef.current, { attributes: true, subtree: true });
    }

    return () => {
      window.removeEventListener("resize", updateIndicator);
      observer.disconnect();
    };
  }, [updateIndicator]);

  return (
    <div className="relative flex" ref={tabsRef}>
      {/* Vertical line */}
      <div
        className="absolute left-0 w-[2px] bg-gray-200 transition-all duration-300 ease-in-out"
        style={lineStyle}
      />
      {/* Active indicator */}
      <div
        className="absolute left-0 w-[2px] bg-black transition-all duration-300 ease-in-out"
        style={indicatorStyle}
      />
      <TabsPrimitive.List
        ref={ref}
        className={cn("flex flex-col ml-4", className)}
        {...props}
      />
    </div>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center justify-start w-full whitespace-nowrap py-3 last:mb-0 text-[14px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray-500 data-[state=active]:text-black",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = TabsPrimitive.Content;

export { Tabs, TabsList, TabsTrigger, TabsContent };
