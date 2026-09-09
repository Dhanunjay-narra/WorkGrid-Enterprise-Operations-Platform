export type DmsChunksMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksMappingStateMachine {
  private allowedTransitions: Record<DmsChunksMappingState, DmsChunksMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksMappingState, to: DmsChunksMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksMappingState, to: DmsChunksMappingState): DmsChunksMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksMapping: " + from + " -> " + to);
    }
    return to;
  }
}
