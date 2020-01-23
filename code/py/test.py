"""Testing Python with Markdata

Usage: $ pytest test.py
"""


def test_yaml():
    """An example of testing a Python code example.
    """
    # Code snippet start:
    from ruamel.yaml import YAML

    inp = """\
    - &CENTER {x: 1, y: 2}
    - &LEFT {x: 0, y: 2}
    - &BIG {r: 10}
    - &SMALL {r: 1}
    # Override
    - <<: [*BIG, *LEFT, *SMALL]
      x: 1
      label: center/big
    """

    yaml = YAML()
    data = yaml.load(inp)
    assert data[4]['y'] == 2
