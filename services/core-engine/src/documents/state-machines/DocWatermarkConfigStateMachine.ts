export type DocWatermarkConfigState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocWatermarkConfigStateMachine {
  private validTransitions: Record<DocWatermarkConfigState, DocWatermarkConfigState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocWatermarkConfigState, next: DocWatermarkConfigState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocWatermarkConfigState, next: DocWatermarkConfigState): DocWatermarkConfigState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocWatermarkConfig: from " + current + " to " + next);
    }
    return next;
  }
}
