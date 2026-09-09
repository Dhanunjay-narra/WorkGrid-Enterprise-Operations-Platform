export type SupportQueuesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesMappingStateMachine {
  private allowedTransitions: Record<SupportQueuesMappingState, SupportQueuesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesMappingState, to: SupportQueuesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesMappingState, to: SupportQueuesMappingState): SupportQueuesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
