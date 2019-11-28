"ui";
ui.layout(
    <scroll>
        <vertical padding="16">
            <text textSize="16sp" textColor="black" text="请设置上班打卡时间:"/>
            <timepicker timePickerMode="spinner"></timepicker>
            <text textSize="16sp" textColor="black" text="请设置下班打卡时间:"/>
            <timepicker timePickerMode="spinner"></timepicker>
            <button id="ok" text="确定"/>
        </vertical>
    </scroll>
    
);