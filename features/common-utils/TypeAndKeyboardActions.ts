import {driver} from "@wdio/globals";
 class TypeKeyboardActions {
    public async typeAndHitEnter(element: any, elementIdentifier: any) {
        await driver.execute('flutter:setTextEntryEmulation', false)
        await driver.switchContext("NATIVE_APP")
        await element.click()
        await driver.pause(2000)
        await element.setValue(elementIdentifier)
        await driver.pressKeyCode(66)
        await driver.pause(5000)
        await driver.switchContext("FLUTTER")
        await driver.execute('flutter:setTextEntryEmulation', true)
    }
}

export default new TypeKeyboardActions();