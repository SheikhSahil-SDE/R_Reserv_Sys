## Test Cases for Web Pages in Session 9(a)
Below are the test cases for the web page in Session 9/index.html, which computes the transpose of a matrix.

*Functional Testing*
## Test Case 1: Valid Matrix Input

    Description: Test the transpose functionality with a valid matrix input.
    Steps:
    Enter 2 for rows and 3 for columns.
    Input matrix elements: [[1, 2, 3], [4, 5, 6]].
    Click "Compute Transpose".
    Expected Output: Transposed matrix displayed as [[1, 4], [2, 5], [3, 6]].

## Test Case 2: Single Row Matrix

    Description: Test transpose of a single row matrix.
    Steps:
    Enter 1 for rows and 3 for columns.
    Input matrix elements: [[7, 8, 9]].
    Click "Compute Transpose".
    Expected Output: Transposed matrix displayed as [[7], [8], [9]].

## Test Case 3: Single Column Matrix

    Description: Test transpose of a single column matrix.

    Steps:

    Enter 3 for rows and 1 for columns.

    Input matrix elements: [[10], [11], [12]].

    Click "Compute Transpose".

    Expected Output: Transposed matrix displayed as [[10, 11, 12]].

## Test Case 4: Empty Matrix Input

    Description: Test behavior when no matrix elements are entered.
    Steps:
    Enter 0 for rows or columns.
    Click "Compute Transpose".
    Expected Output: Error message displayed indicating invalid input.

## Test Case 5: Large Matrix Input

    Description: Test transpose functionality with a large matrix.
    Steps:
    Enter 10 for rows and 10 for columns.
    Input elements as sequential numbers from 1 to 100.
    Click "Compute Transpose".
    Expected Output: Transposed matrix displayed correctly with dimensions 10x10.

*Usability Testing*
## Test Case 6: Responsive Design

    Description: Test if the web page layout adjusts properly on different screen sizes.
    Steps:
    Open the web page on a desktop browser.
    Resize the browser window to simulate different screen sizes.
    Open the web page on a mobile browser.
    Expected Output: The layout remains user-friendly and functional on all screen sizes.

## Test Case 7: Accessibility

    Description: Test if the web page is accessible to users with disabilities.
    Steps:
    Use a screen reader to navigate the web page.
    Check if all form elements have proper labels and descriptions.
    Expected Output: The web page is fully navigable and accessible using assistive technologies.
    Test Report for Web Pages in Session 9(a)

## Summary
The matrix transpose web application was tested using the test cases outlined above. The tests covered functional and usability aspects to ensure the application works as expected and provides a user-friendly experience.

