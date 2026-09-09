export type ProjectSprintsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsItemStateMachine {
  private allowedTransitions: Record<ProjectSprintsItemState, ProjectSprintsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsItemState, to: ProjectSprintsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsItemState, to: ProjectSprintsItemState): ProjectSprintsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsItem: " + from + " -> " + to);
    }
    return to;
  }
}
