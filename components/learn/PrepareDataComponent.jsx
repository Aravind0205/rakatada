import React from 'react';
import YouTubeVideo from "../YotubeComponent";

const PrepareDataComponent = () => {
    return (
        <div>
            <YouTubeVideo videoId={"z13OyA3hIqI"} />
            <div className="h5">Eat</div>
            <div>Eating regularly before donating will help to keep your blood sugar levels stable. This is important so
                that you don’t feel lightheaded or dizzy after your donation. Having a snack before you donate can help
                maintain these blood sugar levels. Ensuring that your diet contains foods rich in iron - such as meats
                and green leafy vegetables - will help to keep you feeling well during and after donation
            </div>
            <div className="h5 mt-3">Drink</div>
            <div>
                Almost half of the blood that you donate is made up of water. The fluids that you lose during donation
                can cause a drop in blood pressure – causing you to feel faint and dizzy.

                To help prevent this from happening we ask you to drink 500ml of water immediately before you donate -
                we’ll give this to you before you donate. Please help us reduce our plastic usage by bringing your own
                refillable bottle.

                It’s also important to ensure that you are well hydrated in the days leading up to your donation. This
                will help to compensate for the fluids lost during donation, and will help to bring your blood volume
                levels back to normal.

                It is essential to avoid alcohol before and after donating as this may affect hydration levels and delay
                recovery
            </div>
            <div className="h5 mt-3">Exercise</div>
            <div>Avoid doing any vigorous exercise or heavy lifting the day of your donation – both before and after
                you’ve donated.

                Keeping your body in a rested state is important to give it a chance to replenish the fluids lost during
                donation, which will help you avoid feeling dizzy or lightheaded and keep you well. Light exercise such
                as walking is fine, but please make sure that you are fully recovered and hydrated prior to your
                donation.
            </div>
            <div className="h5 mt-3">Wear</div>
            <div>We will need to roll up your sleeve past your elbow when you donate – to allow easy access to your
                veins. To make sure that you are comfortable, please wear clothing with loose sleeves.

                While not required, please consider wearing a face covering to protect others. Face masks are available
                if you would like to wear one. Just ask one of our staff.
            </div>
        </div>
    );
};

export default PrepareDataComponent;
