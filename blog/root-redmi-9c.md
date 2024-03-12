---
slug: root-redmi-9c
title: root redmi 9c
authors: [GGLVXD]
tags: [redmi, root, 9c, miui12, global, M2006C3MNG, Angelican]
comments: true
---

**1. unlock bootloader** \
to check if you have bootloader unlocked go to settings -> about phone and click on miui version 7 times till you get developer options
now go to addictional settings and click developer options and scroll till you find mi unlock status
if you have it locked you need to add an account then enable usb debugging and install \
[mi flash unlock](https://xiaomiflashtool.com/wp-content/uploads/MiFlash20170425.zip) 
extract it and run the .exe and proceed the steps 

**2.setup flash** \
1.download this [magisk.zip](https://github.com/topjohnwu/Magisk/releases/download/v21.4/Magisk-v21.4.zip) \
2.move it to your sdcard

**3.install custom twrp recovery** \
1.plug your phone to your computer
2.install on computer [adb tool](https://www.mediafire.com/folder/gnx95dog2892u/adb-fastboot)
3.extract the file go to adb folder and file explorer where is the path delete the path and type cmd and click enter
4.download [PBRP_Redmi_9C.rar](https://www.mediafire.com/file/cex9nkdwu5gsehv/PBRP_Redmi_9C.rar/file) drag the recovery img to adb folder
5.download [vbmeta.img](https://unofficialtwrp.com/wp-content/uploads/2019/11/vbmeta.zip) and drag it in adb folder tho \
6.run in cmd
```shell
adb reboot bootloader
```
7.run 
```shell
fastboot flash recovery recovery.img
```
to just in case fix bootloops run
```shell
fastboot flash vbmeta vbmeta.img
```
and
```shell
fastboot format userdata
```
note: this will delete all data btw \
7. reboot to twrp
```shell
fastboot reboot recovery
```
so now you ashould boot into the twrp\

**4.flash magisk.zip** \
in twrp just click install and find the zip and flash it

THATS IT



if i got your phone bricked, well cool but i aint responsable for this (deal with it yourself)
