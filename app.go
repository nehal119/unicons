package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	absPath, err := os.Getwd()
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	dir, err := os.ReadDir(absPath + "/tabler-icons")
	for _, f := range dir {
		fmt.Println("default/" + strings.Split(f.Name(), ".svg")[0])
	}
}
