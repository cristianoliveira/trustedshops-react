Basic buttons:
```
<div className='react-wrapper'>
  <Button>Primary button</Button>
  <Button theme="secondary">Secondary button</Button>
  <Button theme="text">Text button</Button>
  <Button theme="icon"><Icon name="check" /></Button>
</div>
```

Button sizes:
```
<div className='react-wrapper'>
  <Button size="small">Small button</Button>
  <Button size="medium">Medium button</Button>
  <Button size="large">Large button</Button>
</div>
```

Rounded buttons:
```
<div className='react-wrapper'>
  <Button rounded size="small">Small button</Button>
  <Button rounded size="medium">Medium button</Button>
  <Button rounded size="large" theme="secondary">Large button</Button>
</div>
```

Combine with other elements:
```
<div className='react-wrapper'>
  <Button rounded ghost icon="left" size="small"><Icon name="circle-check" /> Round btn with icon</Button>
  <Button icon="left" theme="text"><Icon name="check" /> Button with icon</Button>
  <Button icon="left" theme="secondary"><Icon name="award" /> Button with icon</Button>
  <Button size="large" icon="right">Button with icon <Icon name="key-arrow-right" /></Button>
</div>
```
