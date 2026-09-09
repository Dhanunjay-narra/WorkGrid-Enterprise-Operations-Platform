export type EvtPublishMetricState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtPublishMetricStateMachine {
  private validTransitions: Record<EvtPublishMetricState, EvtPublishMetricState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtPublishMetricState, next: EvtPublishMetricState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtPublishMetricState, next: EvtPublishMetricState): EvtPublishMetricState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtPublishMetric: from " + current + " to " + next);
    }
    return next;
  }
}
