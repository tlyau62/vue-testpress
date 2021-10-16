<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorldTSX extends Vue {
  @Prop() private msg!: string;

  render() {
    return <div>{this.msg}</div>;
  }
}
</script>
