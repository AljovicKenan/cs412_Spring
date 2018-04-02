CREATE TABLE public."140302199"
(
     id serial,
     department character varying,
     manager character varying,
     primary key (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."140302199"
    OWNER to postgres;
