export type ProjectWorkspacesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectWorkspacesProfileStateMachine {
  private allowedTransitions: Record<ProjectWorkspacesProfileState, ProjectWorkspacesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectWorkspacesProfileState, to: ProjectWorkspacesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectWorkspacesProfileState, to: ProjectWorkspacesProfileState): ProjectWorkspacesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectWorkspacesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
