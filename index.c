#include <stdio.h>
#include <ctype.h>

int main() {
    char text[200];

    printf("Enter text: ");
    fgets(text, sizeof(text), stdin);

    // Convert to uppercase
    for (int i = 0; text[i] != '\0'; i++) {
        text[i] = toupper(text[i]);
    }

    printf("Uppercase: %s", text);

    return 0;
}