export type DmsOcrMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrMappingStateMachine {
  private allowedTransitions: Record<DmsOcrMappingState, DmsOcrMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrMappingState, to: DmsOcrMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrMappingState, to: DmsOcrMappingState): DmsOcrMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrMapping: " + from + " -> " + to);
    }
    return to;
  }
}
