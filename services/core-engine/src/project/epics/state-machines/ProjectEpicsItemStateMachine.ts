export type ProjectEpicsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsItemStateMachine {
  private allowedTransitions: Record<ProjectEpicsItemState, ProjectEpicsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsItemState, to: ProjectEpicsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsItemState, to: ProjectEpicsItemState): ProjectEpicsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsItem: " + from + " -> " + to);
    }
    return to;
  }
}
