// @ts-nocheck
import { scrubString, scrubMessage } from './scrubber';
describe('scrubber', () =>{
  const validString = "This is a test string without any sensitive words";
  const scrubThisString = "Here is your apikey";
  const validMessage = {message: "This is a valid message"};
  const scrubThisMessage = {password: "apikey1234"}
  const redact = "<REDACTED>";
  const objRedact = {password: redact}
  describe('scrubString', () => {
    it('should scrub the string of sensitive keywords', () => {
      expect(scrubString(validString)).toStrictEqual(validString);
      expect(scrubString(scrubThisString)).toBe(redact);
    });
  });

  describe('scrubMessage', () => {
    it('should scrub the message of sensitive keywords', ()=> {
      expect(scrubMessage(validMessage)).toStrictEqual(validMessage);
      expect(scrubMessage(scrubThisMessage)).toStrictEqual(objRedact);
    })
  })
})