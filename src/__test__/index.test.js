const code = `
import v from '@/c/void-package';
v();
`;
test('hello', () => {
    expect(code).toMatchSnapshot();
});
