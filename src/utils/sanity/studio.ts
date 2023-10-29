/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
import config from "./config";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { defineConfig } from "sanity";

export const studioConfig = defineConfig({
  basePath: "/studio",
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Dilshan Ramesh | Official website",
  plugins: [deskTool(), codeInput()],
  env: {
    development: {
      plugins: ["@sanity/vision"],
    },
  },
  schema: {
    types: [
      {
        name: "post",
        title: "Blog post",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
          {
            name: "description",
            title: "Description",
            type: "text",
            rows: 2,
          },
          {
            title: "Dates",
            name: "date",
            type: "object",
            options: {
              collapsible: false,
              collapsed: false,
              columns: 2,
            },
            fields: [
              { name: "published", type: "date", title: "Published" },
              { name: "updated", type: "date", title: "Updated" },
            ],
          },
          {
            title: "Body",
            name: "body",
            type: "array",
            of: [
              {
                type: "block",
                marks: {
                  annotations: [
                    {
                      name: "link",
                      type: "object",
                      title: "link",
                      fields: [
                        {
                          name: "href",
                          type: "url",
                        },
                      ],
                    },
                    {
                      name: "internalLink",
                      type: "object",
                      title: "Internal link",
                      fields: [
                        {
                          name: "reference",
                          type: "reference",
                          title: "Reference",
                          to: [{ type: "post" }],
                        },
                      ],
                    },
                  ],
                },
              },
              {
                type: "code",
              },
              {
                type: "image",
                fields: [
                  {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: {
                      isHighlighted: true, // <-- make this field easily accessible
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});