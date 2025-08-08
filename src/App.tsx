import { ChevronDown, Home, Star } from 'lucide-react'
import {
  Alert,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Checkbox,
  Divider,
  IconButton,
  Skeleton,
} from './components/ui'

function App() {
  const variants = ['contained', 'outlined', 'text'] as const
  const colors = [
    'primary',
    'secondary',
    'error',
    'warning',
    'info',
    'success',
  ] as const

  // const variantsAlert = ['filled', 'outlined', 'standard'] as const
  const colorsAlert = ['error', 'warning', 'info', 'success'] as const

  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Exemplos de Alerts</h1>

      {colorsAlert.map((color, idx) => (
        <Alert
          color={color}
          variant="filled"
          key={idx}
          title="Lorem"
          withCloseButton
          withActionButton
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          vitae accusantium doloribus, recusandae neque inventore dolore eum eos
          praesentium corrupti sit dolores sequi nemo quisquam eligendi, fugiat
          harum vel iusto.
        </Alert>
      ))}

      {colorsAlert.map((color, idx) => (
        <Alert
          color={color}
          variant="outlined"
          key={idx}
          title="Lorem"
          withCloseButton
          withActionButton
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          vitae accusantium doloribus, recusandae neque inventore dolore eum eos
          praesentium corrupti sit dolores sequi nemo quisquam eligendi, fugiat
          harum vel iusto.
        </Alert>
      ))}

      {colorsAlert.map((color, idx) => (
        <Alert
          color={color}
          variant="standard"
          key={idx}
          title="Lorem"
          withCloseButton
          withActionButton
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          vitae accusantium doloribus, recusandae neque inventore dolore eum eos
          praesentium corrupti sit dolores sequi nemo quisquam eligendi, fugiat
          harum vel iusto.
        </Alert>
      ))}

      <h1 className="mb-6 text-3xl font-bold">Exemplos de Skeleton</h1>

      <Skeleton variant="rectangle" isVisible={false}>
        <p>teste</p>
      </Skeleton>
      <Skeleton className="h-10 w-full" variant="rectangle" />
      <Skeleton className="h-10 w-full" variant="text" />
      <Skeleton className="size-10" variant="circle" />

      <Divider />

      <h1 className="mb-6 text-3xl font-bold">Exemplos de Divider</h1>

      <Divider />

      <div className="border-grey-600 flex h-40 justify-center rounded-lg border">
        <Divider orientation="vertical" />
      </div>

      <hr />

      <h1 className="mb-6 text-3xl font-bold">Exemplos de Checkbox</h1>

      <h2 className="text-xl font-semibold">Sizes</h2>

      <div className="flex flex-wrap gap-6">
        {colors.map((color, idx) => (
          <Checkbox
            key={idx}
            id={color}
            value={color}
            color={color}
            size="sm"
            checked
            isDisabled
          >
            {color}
          </Checkbox>
        ))}
      </div>

      <hr />

      <div className="flex flex-wrap gap-6">
        {colors.map((color, idx) => (
          <Checkbox
            key={idx}
            id={color + 'line'}
            value={color + 'line'}
            variant="line"
            color={color}
            size="md"
          >
            {color}
          </Checkbox>
        ))}
      </div>
      <hr />

      <div className="flex flex-wrap gap-6">
        {colors.map((color, idx) => (
          <Checkbox
            key={idx}
            id={color + 'size'}
            value={color + 'size'}
            color={color}
            size="lg"
          >
            {color}
          </Checkbox>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((color, idx) => (
          <IconButton color={color} key={idx}>
            <Star />
          </IconButton>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <IconButton size="sm" isLoading>
          <Star />
        </IconButton>
        <IconButton size="md" isDisabled>
          <Star />
        </IconButton>
        <IconButton size="lg">
          <Star />
        </IconButton>
      </div>

      <div className="flex flex-wrap gap-4">
        {variants.map((variant, idx) => (
          <ButtonGroup variant={variant} key={idx} orientation="vertical">
            <ButtonGroupItem>1</ButtonGroupItem>
            <ButtonGroupItem>2</ButtonGroupItem>
            <ButtonGroupItem>3</ButtonGroupItem>
          </ButtonGroup>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((color, idx) => (
          <ButtonGroup color={color} key={idx}>
            <ButtonGroupItem>1</ButtonGroupItem>
            <ButtonGroupItem>2</ButtonGroupItem>
            <ButtonGroupItem>3</ButtonGroupItem>
          </ButtonGroup>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((color, idx) => (
          <ButtonGroup variant="outlined" color={color} key={idx}>
            <ButtonGroupItem>1</ButtonGroupItem>
            <ButtonGroupItem>2</ButtonGroupItem>
            <ButtonGroupItem>3</ButtonGroupItem>
          </ButtonGroup>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {colors.map((color, idx) => (
          <ButtonGroup variant="text" color={color} key={idx}>
            <ButtonGroupItem>1</ButtonGroupItem>
            <ButtonGroupItem>2</ButtonGroupItem>
            <ButtonGroupItem>3</ButtonGroupItem>
          </ButtonGroup>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <ButtonGroup size="sm">
          <ButtonGroupItem>1</ButtonGroupItem>
          <ButtonGroupItem>2</ButtonGroupItem>
          <ButtonGroupItem>3</ButtonGroupItem>
        </ButtonGroup>
        <ButtonGroup size="md">
          <ButtonGroupItem>1</ButtonGroupItem>
          <ButtonGroupItem>2</ButtonGroupItem>
          <ButtonGroupItem>3</ButtonGroupItem>
        </ButtonGroup>
        <ButtonGroup size="lg">
          <ButtonGroupItem>1</ButtonGroupItem>
          <ButtonGroupItem>2</ButtonGroupItem>
          <ButtonGroupItem>3</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div className="flex flex-wrap gap-4">
        <ButtonGroup>
          <ButtonGroupItem>Profile</ButtonGroupItem>
          <ButtonGroupItem>
            <ChevronDown />
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <h1 className="mb-6 text-3xl font-bold">Exemplos de Botões</h1>

      {/* Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Test</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="contained" icon={Home} isRounded>
            Primary
          </Button>
          <Button variant="contained" icon={Home} isRounded />

          <Button variant="outlined" color="error" icon={Home}>
            Primary
          </Button>

          <Button variant="contained" color="primary" icon={Home}>
            Primary
          </Button>

          <Button
            variant="contained"
            color="primary"
            icon={Home}
            iconPosition="right"
          >
            Primary
          </Button>

          <Button variant="contained" color="primary" isLoading>
            Loading
          </Button>

          <Button variant="contained" isDisabled>
            Disabled
          </Button>
          <Button variant="outlined" isDisabled>
            Disabled
          </Button>
          <Button variant="text" isDisabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Variants - Contained */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contained</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </div>
      </div>

      {/* Variants - Outlined */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Outlined</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </div>
      </div>

      {/* Variants - Text */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Text</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="contained" color="primary" size="sm">
            Small
          </Button>
          <Button variant="contained" color="primary" size="md">
            Medium
          </Button>
          <Button variant="contained" color="primary" size="lg">
            Large
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
