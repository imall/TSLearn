


never 永遠不會有資料的情況，例如 throw error，或是無限迴圈
unknown 有可能有資料，但是不知道是什麼資料
any 有可能有資料，但是不知道是什麼資料，但是可以使用任何方法


# tsconfig

including 、 Excluding files

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```