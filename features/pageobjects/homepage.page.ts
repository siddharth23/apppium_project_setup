
import Page from './page';
import {byText} from "appium-flutter-finder"
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get homePageHeading () {
        return byText('Flutter UI')
    }

}

export default new HomePage();
