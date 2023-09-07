import React from 'react';
import YouTubeVideo from "../YotubeComponent";

const DonationDayComponent = () => {
    return (
        <div>
            <YouTubeVideo videoId={"FXmkVg8a2Mo"}/>
            <div className="h5">Welcome and preparation</div>
            <div>Before donating blood, please eat regular meals, drink plenty of fluid (non-alcoholic) and avoid
                vigorous exercise or exertion.
                When you attend your donation session please read our donor consent information booklet - this explains
                the importance of blood safety. It's important to read this every time you attend, because advice does
                change.

                We must give you sufficient information so that you can make an informed choice, on the benefits and
                risks of donating blood and samples for testing.

                We will provide 500ml of fluid just before you donate. By drinking this over about 5 minutes, it will
                help with your wellbeing during and after donation.
            </div>
            <div className="h5 mt-3">Health screening</div>
            <div>
                You will be called for private health screening, where a donor carer will confirm your identity. It’s
                critical that we guarantee an accurate link between you, your Donor Safety Check and your donation.

                We must ensure that it's safe for you to donate and your donation is safe for a patient to receive.
                We’ll ask some confidential questions based on your completed Donor Safety Check.

                There is a period of time from contact with any infection to detecting markers in the laboratory. We
                trust your honesty when answering these personal questions. This will ensure your blood is safe to
                transfuse to patients.

                You may be referred to a registered nurse for certain medical queries: their uniforms have red piping on
                the collar and cuffs. An explanation will always be provided if you are not able to donate. You will be
                advised when you can donate, and we’ll encourage you to make an appointment before you leave (the team
                are only able to book future appointments for the venue they are currently at).

                For your wellbeing, we must ensure you have enough haemoglobin (iron) in your blood before donating.
                Your test involves us taking a small blood drop from your finger to firstly test your iron levels by
                dropping the blood into a vial of copper sulphate solution. If the blood sinks to the bottom in a set
                time, you can give blood.

                If the blood floats or takes too long to sink, we will offer you a further test using a HemoCue machine.
                This test requires a drop of blood from your fingertip which is tested in the machine to give your
                haemoglobin level. Your haemoglobin result helps us decide if you are able to give blood or if you need
                to wait some time before returning to donate blood.

                Following health screening, you will be asked to sit in a different waiting area. From here you’ll be
                called and invited to a donation chair. You can find out more about health and travel eligibility for
                blood donors here.
            </div>
        </div>
    );
};

export default DonationDayComponent;
