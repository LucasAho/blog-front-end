import React, { Component } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    backGround: {
        backgroundColor: "#1180D3"
    }
});

class ArticleInView extends Component {
    state = {
        searchNodes: ""
    };
    render () {
        const { classes } = this.props
        return (
                <Box className={classes.backGround}>
                            <Typography variant='h2'>
                                The Social Contract
                            </Typography>
                    <Typography variant='body1' paragraph indent>
                        Throughout the course of human history, we have seen countless societies and governing bodies rise and fall. 
                        The basis for creating society is apparent, it has led to improvements and progress in humanity’s quality of life, ability to cooperate with and understand the world around us, 
                        and most importantly, our ability to cooperate with and understand one another. With such clear benefits to maintaining society, it begs the question: what leads to a society’s downfall? 
                        And is this downfall necessary for progress? Or can we somehow preserve what we have gained, and move forward with reform towards new progress. To come to any conclusion on these inquiries, 
                        we must first understand society itself, and recognize what holds us together through our different beliefs, morals, and perspectives. 
                    </Typography>
                    <Typography variant='body1' paragraph>
                        It is my belief that society is maintained and driven by the idea of an unspoken social contract. The idea that the individual must follow a set of guidelines, and that every effort of society does not need to benefit the individual, so long as the ambitions of society as a whole will benefit that individual. It is then this individual’s job to measure the pros and cons of adhering to the social contract, and deciding for themselves whether this adherence is justifiable. It is my opinion that any given individual must see the fulfillment of three principles to justify upholding the social contract.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        <ul>
                            <li>
                                An individual must see selfish personal benefit, or the opportunity to attain this personal benefit.
                            </li>
                            <li>
                                An individual must see that all sides of a social contract are equal, and that all members of society are held accountable and measured by an equal or proportional standard.
                            </li>
                            <li>
                                An individual must see increasing benefit and decreasing detremement by adhering to the contract.
                            </li>
                        </ul>
                        It is when a member of society cannot fulfill these requirements that we begin to see the breakdown of the social contract, and therefore the society that it holds together. 
                    </Typography>
                    <Typography variant='body1' paragraph>
                        When the individual cannot justify adherence to the social contract, they will understandably break it, as it does not serve them and continues to wain on them. Society as a whole is seldom affected by this deviation from its norms, the individual sees consequence in the form of ostracization, and the social contract is maintained on the larger scale. In any society, no matter how just and equal, there will be individuals like this, as it is the nature of humans. However, when entire sects of society cannot justify adherence to the social contract, the society finds itself in a similar place as we find the U.S. today. 
                    </Typography>
                    <Typography variant='body1' paragraph>
                        It is undeniable that minorities in the U.S. are treated unfairly, breaking the second principle of adherence. It is undeniable that the upper class of the U.S. is treated unfairly well, also breaking this second principle. Furthermore, the increasing impossibility of upward mobility in the society of the U.S. breaks our third principle. This leaves one principle for the members of the lower class and members of minority groups to hold to, one reason to adhere to the social contract. So when we see the wrongful murder of George Floyd, Dion Johnson, Ahmaud Arbery, and so many others, it is revealed that the final principle of adherence is broken. For so many individuals in the U.S., the social contract offers nothing. These individuals are not protected by the contract, they gain nothing by following the guidelines of the contract, and they have no reason not to act out, no reason not to fight back against the system that puts down the masses with increasing fervor. 
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Many individuals around me can still justify their adherence to the social contract, and those individuals often seek to pin blame on those breaking the contract, having no understanding or perspective of why someone would want to deviate from society. I ask those individuals to instead stand together with their fellow kin who cannot adhere to society, I ask those individuals to examine and analyze the social contract they have never been wronged by, and ask themselves this: why is it that every day, fewer individuals can justify adherence? Why is there so little accountability from those in power, when the accountability ought to be greater? And why do so few of us at the bottom of society see a way forward within the guidelines of the social contract? Until we have taken measure of these inquiries, and until we have restructured our social contract around the answers we find, the society of the U.S. will only continue towards downfall in every aspect. 
                    </Typography>
        </Box>
    )}
}
export default withStyles(styles, { withTheme: true })(ArticleInView);