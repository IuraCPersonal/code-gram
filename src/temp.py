def LeibnizHarmonicTriangle(height):
    C = []

    for i in range(height + 1):
        C.append([0 for x in range(height + 1)])

    for i in range(0, height + 1):
        for j in range(0, min(i, height) + 1):
            if (j == 0 or j == i):
                C[i][j] = 1
            else:
                C[i][j] = (C[i - 1][j - 1] + C[i - 1][j])

    for i in range(1, height + 1):
        for j in range(1, i + 1):
            print("1/" + str(i * C[i - 1][j - 1]), end=" ")
        print()


LeibnizHarmonicTriangle(4)
