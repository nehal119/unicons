package main

import (
	"fmt"
	"os"
)

func main() {
	absPath, err := os.Getwd()
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println(`export const getAvailableIcons = () => [`)
	dir, err := os.ReadDir(absPath + "/tabler-icons")
	for _, f := range dir {
		fmt.Println("'" + f.Name() + "',")
	}
	fmt.Println("  ] as const;")
}
