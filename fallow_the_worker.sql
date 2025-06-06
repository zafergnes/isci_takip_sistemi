PGDMP  3    )                }            follow_the_worker    17.4    17.4     G           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            H           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            I           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            J           1262    24636    follow_the_worker    DATABASE     w   CREATE DATABASE follow_the_worker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'tr-TR';
 !   DROP DATABASE follow_the_worker;
                     postgres    false            �            1259    24637 	   employers    TABLE     Z  CREATE TABLE public.employers (
    name character varying(30) NOT NULL,
    surname character varying(30) NOT NULL,
    phone_number character varying(13) NOT NULL,
    mail character varying(60) NOT NULL,
    member_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    image text,
    password text NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public.employers;
       public         heap r       postgres    false            K           0    0    TABLE employers    COMMENT     ;   COMMENT ON TABLE public.employers IS 'İş veren tablosu';
          public               postgres    false    217            �            1259    32839    employers_id_seq    SEQUENCE     �   ALTER TABLE public.employers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.employers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    217            �            1259    24669    work_control    TABLE     �   CREATE TABLE public.work_control (
    worker_id integer NOT NULL,
    work_id integer NOT NULL,
    date date NOT NULL,
    employer_id integer NOT NULL,
    id integer NOT NULL,
    was_at_work boolean DEFAULT false NOT NULL
);
     DROP TABLE public.work_control;
       public         heap r       postgres    false            �            1259    32870    work_control_id_seq    SEQUENCE     �   ALTER TABLE public.work_control ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.work_control_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    219            �            1259    32831    work_payments    TABLE     �   CREATE TABLE public.work_payments (
    id integer NOT NULL,
    work_id integer NOT NULL,
    date timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    amount_received integer DEFAULT 0 NOT NULL,
    employer_id integer NOT NULL
);
 !   DROP TABLE public.work_payments;
       public         heap r       postgres    false            �            1259    32860    work_payments_id_seq    SEQUENCE     �   ALTER TABLE public.work_payments ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.work_payments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    221            �            1259    24678    worker_payments    TABLE     �   CREATE TABLE public.worker_payments (
    id integer NOT NULL,
    worker_id integer NOT NULL,
    amount_paid integer DEFAULT 0 NOT NULL,
    amount_paid_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    employer_id integer NOT NULL
);
 #   DROP TABLE public.worker_payments;
       public         heap r       postgres    false            �            1259    32859    worker_payments_id_seq    SEQUENCE     �   ALTER TABLE public.worker_payments ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.worker_payments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    220            �            1259    24652    workers    TABLE     �  CREATE TABLE public.workers (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    surname character varying(30) NOT NULL,
    phone_number character varying(13) NOT NULL,
    mail character varying(60) NOT NULL,
    registration_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    employer_id integer NOT NULL,
    work_id integer NOT NULL,
    wage integer NOT NULL,
    image text DEFAULT 'uploads/default.png'::text NOT NULL
);
    DROP TABLE public.workers;
       public         heap r       postgres    false            �            1259    32856    workers_id_seq    SEQUENCE     �   ALTER TABLE public.workers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.workers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    218            �            1259    32847    works    TABLE     H  CREATE TABLE public.works (
    id integer NOT NULL,
    employer_id integer NOT NULL,
    work_name text NOT NULL,
    work_desc text NOT NULL,
    work_start_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    work_finish_date timestamp with time zone,
    address text NOT NULL,
    cost_of_work integer
);
    DROP TABLE public.works;
       public         heap r       postgres    false            �            1259    32855    works_id_seq    SEQUENCE     �   ALTER TABLE public.works ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.works_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    223            �           2606    24646    employers mail 
   CONSTRAINT     I   ALTER TABLE ONLY public.employers
    ADD CONSTRAINT mail UNIQUE (mail);
 8   ALTER TABLE ONLY public.employers DROP CONSTRAINT mail;
       public                 postgres    false    217            �           2606    24686    worker_payments payments_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.worker_payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);
 G   ALTER TABLE ONLY public.worker_payments DROP CONSTRAINT payments_pkey;
       public                 postgres    false    220            �           2606    24648    employers phone_number 
   CONSTRAINT     Y   ALTER TABLE ONLY public.employers
    ADD CONSTRAINT phone_number UNIQUE (phone_number);
 @   ALTER TABLE ONLY public.employers DROP CONSTRAINT phone_number;
       public                 postgres    false    217            �           2606    32837     work_payments work_payments_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.work_payments
    ADD CONSTRAINT work_payments_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.work_payments DROP CONSTRAINT work_payments_pkey;
       public                 postgres    false    221            �           2606    32854    works work_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.works
    ADD CONSTRAINT work_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.works DROP CONSTRAINT work_pkey;
       public                 postgres    false    223            �           2606    24657    workers worker_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.workers
    ADD CONSTRAINT worker_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.workers DROP CONSTRAINT worker_pkey;
       public                 postgres    false    218           