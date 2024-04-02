import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '多插件',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          服务器安装如登录、记录玩家行为、在线地图等插件。
      </>
    ),
  },
    {
        title: '纯原版',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                服务器没有改变任何原版机制。你可以用任何 1.20.4 客户端登录服务器，无论原版、Fabric 版还是 Forge 版。
            </>
        ),
    },
    {
    title: '高性能',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          服务器配置高，网络好，地图经过预加载，基本不会有卡顿。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
